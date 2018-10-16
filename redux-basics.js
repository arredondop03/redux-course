const redux = require('redux')
const createStore = redux.createStore;


//////////////---------INITIAL STATE-----------////////////////////////


//If we dont declare the initial state it will be undefined if we console.log
const initialState = {
  counter: 0
}


//////////////---------REDUCER-----------////////////////////////


//the default will be initialState, then it will change
const rootReducer = (state = initialState, action) =>{

  if(action.type === 'INC_COUNTER'){
    //we DONT set state.counter++ here because we would be mutating the state and we SHOULD NEVER DO THAT
    //we dont do this either: return state
    return {
      //we will do intead is copy the old state with the spread operator and then overwriter 
      ...state,
      counter: state.counter + 1
    }

  }
  
  if(action.type === 'ADD_COUNTER'){
    //we DONT set state.counter++ here because we would be mutating the state and we SHOULD NEVER DO THAT
    //we dont do this either: return state
    return {
      //we will do intead is copy the old state with the spread operator and then overwriter 
      ...state,
      couter: state.counter + action.value
    }
  }

  return state
}


//////////////---------CREATING STORE-----------////////////////////////


const store = createStore(rootReducer);
console.log('[Creating Store]', store.getState());


//////////////---------SUBSCRIPTION-----------////////////////////////


//this is to inform me when I need a new state because somethig changed.
//this will happen every time an action gets dispatched and we do this right after
//we create a store
store.subscribe(() =>{
  console.log('[Subscription]', store.getState());
})


//////////////---------ACTION-----------////////////////////////


//getting the information. What type it was dispatched and what should we do in the reducer
//unique identifier. Convention: all upper case and descriptive while short

store.dispatch({type: 'INC_COUNTER'}) //Its only one so we dont have to add any other information
store.dispatch({type: 'ADD_COUNTER', value: 10}) //if we wanted to pass more information then we could use a payload. which will be a javascript object
console.log('[Dispatching Action]',store.getState()) //this will be zero if we dont actually add some logic to the reducer
