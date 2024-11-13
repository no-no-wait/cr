import * as anchor from '@coral-xyz/anchor';
import { Connection, PublicKey, Transaction, Signer, Keypair } from '@solana/web3.js';
import idl from '../sol_idl.json';

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const publicKey = new PublicKey('7R9iLjnoFa5hKGZhWtjw8Afm742tw1SA7cgP5KmdWMgd');
const secretKey = Uint8Array.from(JSON.parse(process.env.REACT_APP_ADMIN_PRIVATE_KEY || ''));

const adminSigner = {
  publicKey,
  secretKey
}

export async function sendSol() {
  // @ts-ignore
  if (window.solana && window.solana.isPhantom) {
    //@ts-ignore
    await window.solana.connect();
    //@ts-ignore
    const walletPublicKey = new PublicKey(window.solana.publicKey.toString());
    console.log(walletPublicKey)
    //@ts-ignore
    const provider = new anchor.AnchorProvider(connection, window.solana, {
      commitment: "confirmed",
    });
    anchor.setProvider(provider);
  
    const programId = new PublicKey("6rqe9hyjaFbcXfg5egDV8kHsccyxGt2kTjmDjzTGqfck");

    const customProvider = {
      connection,
      publicKey: walletPublicKey,
  
      async sendAndConfirm(transaction: Transaction, signers: Array<Signer>) {
        // Подписание и отправка транзакции с использованием Phantom Wallet
        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
        transaction.recentBlockhash = blockhash;
        transaction.lastValidBlockHeight = lastValidBlockHeight;
        //@ts-ignore
        transaction.feePayer = new PublicKey(window.solana.publicKey);
  
        // Подписываем транзакцию (если нужны другие подписанты)
        // if (signers && signers.length > 0) {
        //   transaction.partialSign(...signers);
        // }

        console.log(transaction.signatures, 'TR_S')
        // Используем Phantom Wallet для подписания и отправки
        //@ts-ignore
        const signedTransaction = await window.solana.signTransaction(transaction);
        
        console.log(signedTransaction, 'HERE')
        console.log(signedTransaction.signatures[1].publicKey.toString(), 'sss')
        const signature = await connection.sendRawTransaction(signedTransaction.serialize());
        await connection.confirmTransaction(signature, "confirmed");
        return signature;
      },
    };

    const [pda, bump] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault")],
      programId
    );

    const program = new anchor.Program(idl as anchor.Idl, {connection, sendAndConfirm: customProvider.sendAndConfirm});
  
    try {
      await program.methods.initialize()
        .accounts({
          admin: adminSigner.publicKey,
          presale: pda,
        })
        .signers([])
        .rpc();

      await program.methods
        .deposit(new anchor.BN(0.001 * 1000000000))
        .accounts({
          user: walletPublicKey,
          presale: pda,
        })
        .signers([])
        .rpc();

        console.log('success')
    } catch (e) {
      console.log('error', e)
    }
  } else {
    console.log("Wallet not connected;");
  }
}

