import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectCategories,
  selectShopList,
  selectShops,
  selectUnits,
} from '../../redux/selectors';
import './GetArticle.css';
import { useState } from 'react';
import { addItem } from '../../redux/datasSlice';

let catOptionsList = [];

function GetArticle() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const categories = useSelector(selectCategories);
  const shops = useSelector(selectShops);
  const units = useSelector(selectUnits);
  const shopList = useSelector(selectShopList);
  const [artFilter, setArtFilter] = useState(''); /* article filter */
  const [catFilter, setCatFilter] = useState([]); /* catalog filter */

  const handleArticleInput = evt => {
    //get the text for article filter
    setArtFilter(evt.target.value);
  };

  function filterByCategory(elem) {
    if (catFilter.length > 0) {
      if (catFilter.includes(elem.category)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  const handleArticleSelect = evt => {
    evt.preventDefault();
    const articleElem = document.getElementById('article');
    // the article name from selected option is copied to input
    articleElem.value = evt.target.value;
  };

  const handleCatSelect = evt => {
    evt.preventDefault();
    catOptionsList = [];
    let options = document.getElementById('catList').selectedOptions;
    for (let i = 0; i < options.length; i++) {
      catOptionsList.push(options[i].value);
    }
    setCatFilter(catOptionsList);
    // setCatListIndex(catOptCounter);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let art = evt.target[0].value;
    let quant = evt.target[2].value;
    let unit = evt.target[3].value;
    let shop = evt.target[4].value;
    if (art === '') {
      alert('Trebuie completat campul "Denumire articol"');
      return;
    }
    if (quant === '') {
      alert('Trebuie completat campul "Cantitate"');
      return;
    }
    if (shopList.filter(item => item.name === art).length > 0) {
      alert(art + ' este deja in lista de cumparaturi.');
      return;
    }
    const artIndex = articles.findIndex(item => item.name === art);
    const cat = articles[artIndex].category;
    let newItem = {
      name: art,
      category: cat,
      quantity: quant,
      unit: unit,
      shopName: shop,
    };
    dispatch(addItem(newItem));
    document.getElementById('article').value = '';
    document.getElementById('quant').value = '1';
  };

  return (
    <form id="articleInput" name="articleInput" onSubmit={handleSubmit}>
      <label className="label">Denumire articol: </label>
      <input
        type="text"
        id="article"
        autoComplete="off"
        onInput={handleArticleInput}
      ></input>
      <select id="artList" size="7" onClick={handleArticleSelect}>
        {articles
          .filter(filterByCategory)
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
      <label className="label">Unitate masura: </label>
      <select>
        {units.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <label className="label">Magazin: </label>
      <select>
        {shops.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <button type="submit">Adauga</button>
      <label className="label">Filtru categorii: </label>
      <select id="catList" size="7" onClick={handleCatSelect} multiple>
        {categories.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </form>
  );
}

export default GetArticle;
