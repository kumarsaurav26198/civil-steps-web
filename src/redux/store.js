import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import {thunk} from "redux-thunk";
  import { reducer as testReducer } from "./testReducer/reducer";
 
  
  const rootReducer = combineReducers({
    testReducer,
     
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export { store };
  