import * as anchor from "@coral-xyz/anchor";
import { Program, AnchorProvider, Idl } from "@coral-xyz/anchor";
import * as assert from "assert";

import idl from '../sol_idl.json';
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import connectWallet from "./web3walletconnect";

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });
// anchor.setProvider(provider);

// Define an interface for the Presale account
interface PresaleAccount {
  totalDeposits: anchor.BN;
  admin: anchor.web3.PublicKey;
}

interface UserBalanceAccount {
  amount: anchor.BN;
}

export const testFunc =  async () => {
  // const program = new anchor.Program(idl as anchor.Idl, {connection});
  // // console.log(program)
  // const depositAmount = new anchor.BN(0.01 * anchor.web3.LAMPORTS_PER_SOL);
  // const transaction = new Transaction();
  // const resp = await connectWallet();
  // const programId = new PublicKey("6rqe9hyjaFbcXfg5egDV8kHsccyxGt2kTjmDjzTGqfck");

  // // Добавляем инструкцию для перевода SOL на аккаунт контракта
  // transaction.add(
  //   SystemProgram.transfer({
  //     fromPubkey: resp.publicKey,
  //     toPubkey: programId,
  //     lamports: depositAmount, // Количество SOL в лампортах
  //   })
  // );

  // // Добавляем инструкцию вызова метода `deposit` смарт-контракта
  // transaction.add(
  //   await program.methods.deposit().accounts({
  //     user: resp.publicKey,
  //     contractAccount: programId,
  //   }).instruction()
  // );

  // // Подписываем и отправляем транзакцию
  // const signature = await provider.sendAndConfirm(transaction, [wallet.payer]);
  // console.log(signature)
}
