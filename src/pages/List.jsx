import ShoppingList from 'components/ShoppingList/ShoppingList';
import GetArticle from '../components/GetArticle/GetArticle';
import './List.css';

export const List = () => {
  return (
    <main>
      <GetArticle />
      <ShoppingList />
    </main>
  );
};
