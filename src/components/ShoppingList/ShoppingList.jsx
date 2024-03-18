import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectShopList } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { deleteItem } from '../../redux/datasSlice';

function ShoppingList() {
  const dispatch = useDispatch();
  const shopList = useSelector(selectShopList);
  const [backList, setBackList] = useState([...shopList]);

  useEffect(() => {
    setBackList([...shopList]);
  }, [shopList]);

  function Item(props) {
    const [focused, setFocused] = useState(false);
    const { name, quantity, unit, shopName } = props.content;
    const index = props.index;

    const handleMouseEnter = evt => {
      setFocused(true);
    };
    const handleMouseLeave = evt => {
      setFocused(false);
    };
    const text1 = `• ${name} - ${quantity} ${unit} -- ${shopName}  `;

    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text1}
        {focused ? (
          <button onClick={props.onDelete} value={index}>
            ❌
          </button>
        ) : null}
      </li>
    );
  }

  const handleDelete = evt => {
    const itemPosition = evt.target.value;
    dispatch(deleteItem(itemPosition));
  };

  const handleSave = evt => {
    alert('Functiune deocamdata neimplementata!');
  };

  const handleSort = evt => {
    let workList = [...backList];
    const criteria = evt.target.name;
    switch (criteria) {
      case 'atoz':
        workList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'bycateg':
        workList.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'byshop':
        workList.sort((a, b) => a.shopName.localeCompare(b.shopName));
        break;
      default:
        workList = [...shopList];
    }
    setBackList(workList);
  };

  return (
    <div className="shoplist">
      <div>
        <h3>Lista de cumpărături</h3>
        <div className="functions">
          <button name="unsorted" onClick={handleSort}>
            Unsorted
          </button>
          <button name="atoz" onClick={handleSort}>
            A-Z
          </button>
          <button name="bycateg" onClick={handleSort}>
            byCateg
          </button>
          <button name="byshop" onClick={handleSort}>
            byShop
          </button>
          <button name="save" onClick={handleSave}>
            💾
          </button>
        </div>
      </div>
      <ul>
        {backList.length > 0 &&
          backList.map((item, indx) => (
            <Item
              key={nanoid()}
              content={item}
              index={indx}
              onDelete={handleDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
