// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.js';
import { App } from './components/App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <ReduxProvider store={store}>
    <BrowserRouter basename="/shopping-record-app">
      <App />
    </BrowserRouter>
  </ReduxProvider>
  // </StrictMode>
);
