import { configureStore } from '@reduxjs/toolkit';
import { datasReducer } from './datasSlice';

/**
 * OBIECTUL DE STATE VA FI:
 * {
 * articles: [{name: '', category: ''}, {name: '', category: ''}],
 * categories: ['', '', ''],
 * shops: ['', '', ''],
 * units: ['', '', ''],
 * shopList: [{
 *    name: '',
 *    category: '',
 *    quantity: ,
 *    unit: ,
 *    shopName: '',
 * }],
 * }
 */

export const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});
