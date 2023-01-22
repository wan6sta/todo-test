import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  Store
} from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoReducer } from '../features/Todo/reducers/todoReducer'
import { taskReducer } from '../features/Task/reducers/taskReducer'

const rootReducer = combineReducers({
  todo: todoReducer,
  task: taskReducer
})

export const store: TStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type TDispatch = ThunkDispatch<RootState, void, AnyAction>
export type TStore = Store<RootState, AnyAction> & { dispatch: TDispatch }
