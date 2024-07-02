import { applyMiddleware, combineReducers, createStore } from 'redux';
import productsReducer from './productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authDataReducer from './authDataReducer';
import cartReducer from './cartReducer';
import imageUploadReducer from './imageUploadReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    products: productsReducer,
    authData: authDataReducer,
    cart: cartReducer,
    imageUrl: imageUploadReducer
}
);

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);