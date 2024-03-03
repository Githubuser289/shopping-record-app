import { useSelector } from 'react-redux';
import {
  selectArticles,
  selectCategories,
  selectShops,
  selectUnits,
} from '../redux/selectors';

export const List = () => {
  const articles = useSelector(selectArticles);
  const categories = useSelector(selectCategories);
  const shops = useSelector(selectShops);
  const units = useSelector(selectUnits);

  console.log('articles=', articles);
  console.log('categories=', categories);
  console.log('shops=', shops);
  console.log('units=', units);

  return (
    <main>
      <p></p>
      <h1>Introducere lista</h1>
      <p>la stilizare sa folosesc culorile pregatite</p>
      <p>*****</p>
      <p>LUCREZ CU DATELE DINTR-UN FISIER LOCAL ---</p>
    </main>
  );
};
