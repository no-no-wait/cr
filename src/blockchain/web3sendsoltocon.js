import React, { useState } from 'react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const programId = new PublicKey('6rqe9hyjaFbcXfg5egDV8kHsccyxGt2kTjmDjzTGqfck'); // Адрес смарт-контракта

class DepositInstruction {
  constructor({ amount }) {
    this.amount = amount;
  }
}

const DepositSchema = new Map([
  [DepositInstruction, { kind: 'struct', fields: [['amount', 'u64']] }],
]);

const sendSolToContract = async () => {
  const walletAddress = window.localStorage.getItem('accountPkh');

  if (!walletAddress) {
    alert("Сначала подключите кошелек!");
    return;
  }

  try {
    // Конвертация 0.001 SOL в лямпорты (1 SOL = 1,000,000,000 лямпортов)
    const lamports = 0.00001 * 1_000_000_000;
    const { blockhash } = await connection.getLatestBlockhash('confirmed');

    // Создание транзакции для перевода SOL
    const transaction = new Transaction({
      recentBlockhash: blockhash,
      feePayer: new PublicKey(walletAddress),
    }).add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(walletAddress),
        toPubkey: programId,
        lamports: lamports,
      })
    );

    // Подпись и отправка транзакции через Phantom Wallet
    const { signature } = await window.solana.signAndSendTransaction(transaction);
    console.log("Транзакция отправлена с подписью:", signature);

    // Подтверждение транзакции
    await connection.confirmTransaction(signature, 'confirmed');
    console.log("Транзакция подтверждена!");
  } catch (error) {
    console.error("Ошибка при отправке SOL на смарт-контракт:", error);
  }
};

export default sendSolToContract;
