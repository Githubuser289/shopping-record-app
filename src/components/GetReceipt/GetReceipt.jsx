import { useDispatch, useSelector } from 'react-redux';
import { selectArticles, selectShops } from '../../redux/selectors';
import { useState } from 'react';
import {
  addReceiptItem,
  setDate,
  setNewReceipt,
  setShopName,
} from '../../redux/datasSlice';
import './GetReceipt.css';

function GetReceipt() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const shops = useSelector(selectShops);
  const [artFilter, setArtFilter] = useState(''); /* article filter */

  const today = new Date();
  var todayDate =
    today.getFullYear() +
    '-' +
    String(today.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(today.getDate()).padStart(2, '0');

  const handleArticleInput = evt => {
    //get the text for article filter
    setArtFilter(evt.target.value);
  };

  const handleArticleSelect = evt => {
    evt.preventDefault();
    const articleElem = document.getElementById('article');
    // the article name from selected option is copied to input
    articleElem.value = evt.target.value;
  };

  const handleAddItem = evt => {
    evt.preventDefault();
    let name = evt.target[2].value;
    let quant = evt.target[4].value;
    let amount = evt.target[5].value;
    if (name === '') {
      alert('Trebuie completat campul "Denumire articol"');
      return;
    }
    if (quant === '') {
      alert('Trebuie completat campul "Cantitate"');
      return;
    }
    if (amount === '') {
      alert('Trebuie completat campul "Suma"');
      return;
    }
    let newItem = {
      name,
      quantity: quant,
      amount,
    };
    dispatch(addReceiptItem(newItem));
    document.getElementById('article').value = '';
    document.getElementById('quant').value = '1';
  };

  const handleDate = evt => {
    dispatch(setDate(evt.target.value));
  };

  const handleNewReceipt = () => {
    const formElem = document.getElementById('receiptInput');
    formElem.reset();
    dispatch(setNewReceipt());
  };

  const handleShopName = evt => {
    dispatch(setShopName(evt.target.value));
  };

  return (
    <form id="receiptInput" name="receiptInput" onSubmit={handleAddItem}>
      <label className="label">Data bonului:</label>
      <input
        type="date"
        id="date"
        min="2024-01-01"
        max={todayDate}
        onChange={handleDate}
      />
      <label className="label">Alegeți magazinul: </label>
      <select id="shoplist" size="7" onChange={handleShopName}>
        {shops.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <label className="label">Denumire articol: </label>
      <input
        type="text"
        id="article"
        autoComplete="off"
        onInput={handleArticleInput}
      ></input>
      <select id="artList" size="7" onClick={handleArticleSelect}>
        {articles
          .filter(i => i.name.toLowerCase().includes(artFilter.toLowerCase()))
          .map(i => (
            <option key={i.name} value={i.name}>
              {i.name}
            </option>
          ))}
      </select>
      <div>
        <label className="label">Cantitate: </label>
        <input
          type="number"
          id="quant"
          defaultValue="1"
          min="1"
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label className="label">Suma: </label>
        <input type="number" id="amount" min="1" autoComplete="off"></input>
      </div>
      <button type="submit">Adauga</button>
      <br />
      <br />
      <button type="button" onClick={handleNewReceipt}>
        Bon nou
      </button>
    </form>
  );
}

export default GetReceipt;
