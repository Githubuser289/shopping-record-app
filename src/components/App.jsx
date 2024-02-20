import { Route, Routes } from 'react-router-dom';
import { Receipt } from '../pages/Receipt';
import { List } from '../pages/List';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Data } from 'pages/Data';
import { Statistics } from 'pages/Statistics';
import { About } from 'pages/About';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<List />} />
        <Route path="receipt" element={<Receipt />} />
        <Route path="data" element={<Data />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};
