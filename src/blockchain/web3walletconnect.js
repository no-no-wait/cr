import { Connection, PublicKey, Transaction } from '@solana/web3.js';

let provider = null;
if (window.solana && window.solana.isPhantom) {
  provider = window.solana;
} else {
  alert('Phantom Wallet не установлен!');
}

async function connectWallet() {
  if (provider) {
    try {
      console.log(window.localStorage.getItem('accountPkh'))
      const resp = await provider.connect();
      console.log(window.solana)
      window.localStorage.setItem('accountPkh', resp.publicKey.toString())
      console.log('Кошелек подключен:', resp.publicKey.toString());
      return resp.publicKey;
    } catch (err) {
      console.error('Ошибка подключения к кошельку:', err);
    }
  }
}

export default connectWallet;
