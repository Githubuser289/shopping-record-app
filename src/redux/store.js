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
 * receipt: {
 *    items:[{
 *      name: '',
 *      quantity: ,
 *      amount: ,
 *    }],
 *    shop: '',
 *    date: null,
 * }
 * to receipt will be added (before saving) the date and the shop
 *
 * }
 */

export const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});
