export const selectArticles = state => state.datas.articles;

export const selectCategories = state => state.datas.categories;

export const selectShops = state => state.datas.shops;

export const selectUnits = state => state.datas.units;

export const selectShopList = state => state.datas.shopList;

export const selectReceipt = state => state.datas.receipt;

export const selectIsLoading = state => state.datas.isLoading;

export const selectError = state => state.datas.error;

// export const selectFilter = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
