import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import UserReducer from './reducers/UserReducer';
import PropertyReducer from './reducers/PropertyReducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  UserReducer: persistReducer(persistConfig, UserReducer),
  PropertyReducer: PropertyReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
