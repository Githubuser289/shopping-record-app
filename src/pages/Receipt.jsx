import GetReceipt from '../components/GetReceipt/GetReceipt';
import ReceiptList from '../components/ReceiptList/ReceiptList';
import './Receipt.css';

export const Receipt = () => {
  return (
    <main>
      <GetReceipt />
      <ReceiptList />
    </main>
  );
};
