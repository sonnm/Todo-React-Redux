import { persistStore, persistReducer } from 'redux-persist';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import localStorage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(initialState = { items: [], filter: 'all' }) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  /* eslint-enable */
  const persistor = persistStore(store);
  return { store, persistor };
}
