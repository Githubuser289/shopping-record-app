import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectReceipt } from '../../redux/selectors';
import './ReceiptList.css';
import { addFileContent, setNewReceipt } from '../../redux/datasSlice';

var file = null;
var newFile;
var allContent;
function ReceiptList() {
  const dispatch = useDispatch();
  const receipt = useSelector(selectReceipt);

  function totalAmount() {
    return receipt.items.reduce(
      (accum, elem) => accum + Number(elem.amount),
      0
    );
  }

  function saveReceipt() {
    let newContent = [`${receipt.date},${receipt.shop}`];
    receipt.items.forEach(e => {
      newContent.push(`\n${e.name},${e.quantity},${e.amount}`);
    });

    let nr = (Date.now() % 10000).toString();

    if (file === null) {
      const inputElem = document.createElement('input');
      inputElem.type = 'file';
      var reader = new FileReader();
      inputElem.onchange = e => {
        file = e.target.files[0];
        reader.readAsText(file, 'UTF-8');
      };
      inputElem.click();
      reader.onload = readerEvent => {
        var fileContent = readerEvent.target.result;
        allContent = fileContent.concat(newContent);
        dispatch(addFileContent(allContent));
        newFile = new Blob([allContent], { type: file.type });
        var anchor = document.createElement('a');
        var url = URL.createObjectURL(newFile);
        anchor.href = url;
        anchor.download = file.name.replace(/\.[^/.]+$/, nr + '$&');
        anchor.click();
        URL.revokeObjectURL(url);
      };
    } else {
      allContent = receipt.content + `\n` + newContent;
      dispatch(addFileContent(allContent));
      newFile = new Blob([allContent], { type: file.type });
      var anchor = document.createElement('a');
      var url = URL.createObjectURL(newFile);
      anchor.href = url;
      anchor.download = file.name.replace(/\.[^/.]+$/, nr + '$&');
      anchor.click();
      URL.revokeObjectURL(url);
    }
  }

  const handleSave = () => {
    if (receipt.shop === '') {
      alert('Trebuie să alegeți magazinul!');
      return;
    }
    if (receipt.date === null) {
      alert('Trebuie să alegeți data!');
      return;
    }
    saveReceipt();
    const formElem = document.getElementById('receiptInput');
    formElem.reset();
    dispatch(setNewReceipt());
  };

  return (
    <div className="receipt">
      <div className="titleline">
        <h3>Lista articole</h3>
        <button onClick={handleSave}>Salvare bon</button>
      </div>

      {receipt.date !== null && <i> Data: {receipt.date}</i>}
      {receipt.shop !== '' && <i>Magazin: {receipt.shop}</i>}
      <br />
      <ul>
        {receipt.items.map(item => (
          <li key={nanoid()}>
            {item.name} - cant={item.quantity}, pret={item.amount}lei
          </li>
        ))}
      </ul>
      <br />
      <p>{receipt.items.length} articole</p>
      <p>Total bon: {totalAmount()} lei</p>
    </div>
  );
}

export default ReceiptList;
