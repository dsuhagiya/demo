import reduxLogger from "redux-logger";
// const { logger } = reduxLogger;
// import { logger } from "redux-logger";
import redux from "redux";
// const redux = require("redux");
// const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger({});

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyIceream() {
  return {
    type: BUY_ICECREAM,
  };
}
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

// const initialState = {
//   numOfCakes: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initialstate:", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceream());
store.dispatch(buyIceream());

unsubscribe();
