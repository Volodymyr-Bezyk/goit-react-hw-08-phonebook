export const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

export const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

export const deleteContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const toggleFavouriteSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};

export const pendingReducer = state => {
  state.isLoading = true;
};

export const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
