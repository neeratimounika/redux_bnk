import {createStore} from 'redux'

const initialState ={
    balance:20000,
    fullName:'N.Mounika',
    mobile:9014806528,

}

function accountReducer(state=initialState,action){
    switch(action.type){
        case 'deposit':
            return {...state, balance: state.balance+ +action.payload};
        case 'withDraw':
            return {...state, balance: state.balance- +action.payload};
        case 'mobileUpdate':
            return {...state, mobile: action.payload };
        case 'nameUpdate':
            return {...state, fullName: action.payload};
        case 'reset':
            return initialState
        default:
            return state;
    }
   

}





const store = createStore(accountReducer)

store.dispatch({type:'deposit', payload:1000});
store.dispatch({type:'withDraw',payload:100});
store.dispatch({type:'mobileUpdate',payload:6301041419});
store.dispatch({type:'nameUpdate',payload:'Mounika Neerati'});


export default store