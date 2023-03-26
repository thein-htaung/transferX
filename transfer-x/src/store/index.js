import { createStore } from 'redux';

const initialState = {
    isValidUser: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'setupLoginStatus') {
        return {...state, ...action.data}
    }
    return state;
}

const store = createStore(reducer);

export const useSimpleDispatch = type => (data) => store.dispatch({ type, data });

export default store;