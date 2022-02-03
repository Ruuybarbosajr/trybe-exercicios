const Redux = require('redux');

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('ruy@trybe.com'));

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// ex: import meuReducer from './meuReducer'
// ex: meuOutroReducer from './meuOutroReducer'

// const reducerCombinado = combineReducers({
//   meuReducer,
//   meuOutroReducer,
// });
