import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
const programId = new PublicKey('6rqe9hyjaFbcXfg5egDV8kHsccyxGt2kTjmDjzTGqfck');

async function connectToContract() {
  try {
    const programInfo = await connection.getAccountInfo(programId);

    if (programInfo) {
      console.log('Смарт-контракт найден!');
      console.log('Данные программы:', programInfo.data);
    } else {
      console.log('Смарт-контракт не найден.');
    }
  } catch (error) {
    console.error('Ошибка подключения к смарт-контракту:', error);
  }
}

export default connectToContract;
