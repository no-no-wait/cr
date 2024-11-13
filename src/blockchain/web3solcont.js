import { Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import * as borsh from 'borsh';
import { sha256 } from 'js-sha256';
import BN from 'bn.js';

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const programId = new PublicKey('6rqe9hyjaFbcXfg5egDV8kHsccyxGt2kTjmDjzTGqfck'); // Адрес смарт-контракта

class DepositArgs {
  constructor(properties) {
    this.amount = properties.amount;
  }
}

const DepositSchema = new Map([[ DepositArgs, { kind: 'struct', fields: [['amount', 'u64']]}]]);

const getMethodDiscriminator = (methodName) => {
  const hash = sha256(`global:${methodName}`);
  return Buffer.from(hash, 'hex').slice(0, 8);
};

async function callDepositMethod(amount) {
  try {
    const args = new DepositArgs({ amount: new BN(0.001 * 1000000000) });
    const serializedData = borsh.serialize(DepositSchema, args);

    const methodDiscriminator = getMethodDiscriminator("deposit");
    const instructionData = Buffer.concat([methodDiscriminator, Buffer.from(serializedData)]);

    const instruction = new TransactionInstruction({
      keys: [
        { pubkey: window.localStorage.getItem('accountPkh'), isSigner: true, isWritable: true }
      ],
      programId: programId,
      data: instructionData,
    });

    const { blockhash } = await connection.getLatestBlockhash();
    const transaction = new Transaction({
      recentBlockhash: blockhash,
    }).add(instruction);

    const signature = await connection.sendTransaction(transaction, []);
    console.log(signature);

    await connection.confirmTransaction(signature);
    console.log("Nice");
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

export default callDepositMethod;
