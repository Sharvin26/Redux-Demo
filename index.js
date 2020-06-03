// Required Imports
const redux = require("redux");

// Action constant
const BUY_PEN = "BUY_PEN";
const BUY_PENCIL = "BUY_PENCIL";

// Action Creator
const buyPen = () => {
    return {
        type: BUY_PEN,
    };
};

const buyPencil = () => {
    return {
        type: BUY_PENCIL,
    };
};

// Initial State of Store
const initialPenState = {
    numOfPens: 5,
};

const initialPencilState = {
    numOfPencils: 10,
};

// Reducer
const penReducer = (state = initialPenState, action) => {
    switch (action.type) {
        case BUY_PEN:
            return {
                ...state,
                numOfPens: state.numOfPens - 1,
            };
        default:
            return state;
    }
};

const pencilReducer = (state = initialPencilState, action) => {
    switch (action.type) {
        case BUY_PENCIL:
            return {
                ...state,
                numOfPencils: state.numOfPencils - 1,
            };
        default:
            return state;
    }
};

// Combine Reducer
const combineReducer = redux.combineReducers;
const rootReducer = combineReducer({
    pen: penReducer,
    pencil: pencilReducer,
});

// CreateStore object
const createStore = redux.createStore;
const store = createStore(rootReducer);

store.dispatch(buyPen());
console.log("State", store.getState());

store.dispatch(buyPencil());
console.log("State", store.getState());

store.dispatch(buyPen());
console.log("State", store.getState());

store.dispatch(buyPencil());
console.log("State", store.getState());

store.dispatch(buyPen());
console.log("State", store.getState());

store.dispatch(buyPencil());
console.log("State", store.getState());

const unsubscribe = store.subscribe(() => {});
unsubscribe();
