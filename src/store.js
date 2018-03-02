import { createStore, applyMiddleware } from 'redux'
import dropdownReducer from './reducers/dropdownReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export function configureStore(){
  return createStore(
    dropdownReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const store = configureStore()
