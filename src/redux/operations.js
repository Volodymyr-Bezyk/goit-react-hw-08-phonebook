import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://6375e518b5f0e1eb85fc561f.mockapi.io';

export const fetchContacts = abort => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts', { signal: abort.signal });
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
