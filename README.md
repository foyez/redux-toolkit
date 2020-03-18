# Redux Toolkit

## Plain redux

```js
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return { type: INCREMENT }
}

function decrement() {
  return { type: DECREMENT }
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

## redux-tlk

```js
const increment = createAction('INCREMENT)
const decrement = createAction('DECREMENT)
const increment5 = createAction('INCREMENT5', val => ({
  payload: {val}
}))

const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
  [increment5]: (state, {payload}) => state + payload.val,
})

const store = configureStore({
  reducer: counter
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

```js
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    increment5: (state, { payload }) => state + payload.val,
  },
})

const { actions, reducer } = counterSlice
const { increment, decrement } = actions

const store = configureStore({
  reducer: counter,
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

- `configureStore`: creates a Redux store instance like the original createStore from Redux, but accepts a named options object and sets up the Redux DevTools Extension automatically

- `createAction`: accepts an action type string, and returns an action creator function that uses that type

- `createReducer`: accepts an initial state value and a lookup table of action types to reducer functions, and creates a reducer that handles all of those action types

- `createSlice`: accepts an initial state and a lookup table with reducer names and functions, and automatically generates action creator functions, action type strings, and a reducer function.

### createSlice

createSlice takes an options object as its argument, with these options:

- `name`: a string that is used as the prefix for generated action types
- `initialState`: the initial state value for the reducer
- `reducers`: an object, where the keys will become action type strings, and the functions are reducers that will be run when that action type is dispatched.
