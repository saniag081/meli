import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RespositoryFactory from '../repositories/RepositoryFactory';

const apiRespository = RespositoryFactory.get('api');

const initialState = {
  nameSearch: '',
  search: {},
  detail: {},
}

export const getSearchProduct = createAsyncThunk('products/getSearchProduct', async (product, { dispatch }) => {
  const request = await apiRespository.getSearch(product);
  dispatch(setSearch(request.data));
  dispatch(setNameSearch(product));
});

export const getDetailProduct = createAsyncThunk('products/getDetailProduct', async (id, { dispatch }) => {
  const request = await apiRespository.getDetailProduct(id);
  dispatch(setDetail(request.data));
});


export const products =  createSlice({
  name: 'products',
  initialState,
  reducers: {
    setNameSearch(state, action) {
      state.nameSearch = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    }
  },
});

export const { setSearch, setDetail, setNameSearch } = products.actions;

export default products.reducer;
