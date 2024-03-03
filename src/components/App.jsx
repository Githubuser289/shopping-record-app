import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Receipt } from '../pages/Receipt';
import { List } from '../pages/List';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Data } from 'pages/Data';
import { Statistics } from 'pages/Statistics';
import { About } from 'pages/About';

import { fetchDatas } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDatas());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading datas...</p>}
      {error && <p>Error on data loading - ${error}</p>}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<List />} />
          <Route path="receipt" element={<Receipt />} />
          <Route path="data" element={<Data />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
