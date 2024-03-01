import { configureStore } from '@reduxjs/toolkit';
import { tutorsReducer } from './slices/tutorsSlice';

/**
 * OBIECTUL DE STATE VA FI:
 * {
 * cities: [...lista de orase],
 * faculties: [...lista de facultati],
 * facultiesSearchTerm: "",
 * tutors: [...lista de tutori]
 * }
 */

export const store = configureStore({
  reducer: {
    tasks: tutorsReducer,
  },
});
