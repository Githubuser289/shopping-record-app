import { configureStore } from '@reduxjs/toolkit';
import { datasReducer } from './datasSlice';

/**
 * OBIECTUL DE STATE VA FI:
 * {
 * articles: [{name: '', category: ''}, {name: '', category: ''}],
 * categories: ['', '', ''],
 * shops: ['', '', ''],
 * units: ['', '', ''],
 * }
 */

export const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});
