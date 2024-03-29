import {combineReducers, legacy_createStore as createStore} from 'redux'
import { counterReducer } from '../reducers/counterReducer'
import {loadState, saveState} from "../../../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});


export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store