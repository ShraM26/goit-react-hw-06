import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice'; 
import filterReducer from './filtersSlice'; 

// Преобразователь для игнорирования несерийных данных
const transform = createTransform(
  (inboundState, key) => inboundState,
  (outboundState, key) => outboundState,
  { whitelist: ['contacts', 'filter'] } // Примените к нужным слайсам
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [transform],
  whitelist: ['contacts', 'filter'] // Список слайсов для сохранения
};

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);