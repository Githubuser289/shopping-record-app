import { createSlice } from '@reduxjs/toolkit';
import { fetchDatas } from './operations';

const initialState = {
  articles: [{ name: '', category: '' }],
  categories: [],
  shops: [],
  units: [],
  shopList: [],
  receipt: {
    items: [],
    shop: '',
    date: null,
    //temporary values
    file: null,
    content: '',
  },
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const datasSlice = createSlice({
  name: 'datas',
  initialState: initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.shopList.push(action.payload);
      },
    },
    deleteItem(state, action) {
      const index = action.payload;
      state.shopList.splice(index, 1);
    },
    addReceiptItem: {
      reducer(state, action) {
        state.receipt.items.push(action.payload);
      },
    },
    setDate(state, action) {
      state.receipt.date = action.payload;
    },
    setShopName(state, action) {
      state.receipt.shop = action.payload;
    },
    setNewReceipt(state) {
      state.receipt.date = null;
      state.receipt.shop = '';
      state.receipt.items = [];
    },

    // temporary reducers
    addFileContent(state, action) {
      state.receipt.content = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDatas.pending, handlePending)
      .addCase(fetchDatas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload.articles;
        state.categories = action.payload.categories;
        state.shops = action.payload.shops;
        state.units = action.payload.units;

        state = action.payload;
      })
      .addCase(fetchDatas.rejected, handleRejected);

    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // })
    // .addCase(addContact.rejected, handleRejected)

    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     item => item.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // })
    // .addCase(deleteContact.rejected, handleRejected);
  },
});

export const {
  addItem,
  deleteItem,
  addReceiptItem,
  setDate,
  setShopName,
  setNewReceipt,
  setFile, //temporary
  addFileContent, //temporary
} = datasSlice.actions;
export const datasReducer = datasSlice.reducer;
