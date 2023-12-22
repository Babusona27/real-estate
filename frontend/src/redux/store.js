import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import UserReducer from './reducers/UserReducer';
import PropertyReducer from './reducers/PropertyReducer';
import PropertyListReducer from './reducers/PropertyListReducer';
import SearchReducer from './reducers/SearchReducer';
import FavoritePropertyReducer from './reducers/FavoritePropertyReducer';
import SellerPropertyListReducer from './reducers/SellerPropertyListReducer';
const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  UserReducer: persistReducer(persistConfig, UserReducer),
  PropertyReducer: PropertyReducer,
  PropertyListReducer: PropertyListReducer,
  SellerPropertyListReducer: SellerPropertyListReducer,
  SearchReducer: SearchReducer,
  FavoritePropertyReducer:  FavoritePropertyReducer ,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
