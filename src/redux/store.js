import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [thunk]

process.env.NODE_ENV === 'development' && middlewares.push(logger)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
