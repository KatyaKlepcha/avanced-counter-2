import {AppRootStateType} from "../components/bll/store/store";



// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
export const loadState = () => {
    try {
        const serializedState  = localStorage.getItem('counter');
        if (serializedState  === null) {
            return undefined;
        }
        return JSON.parse(serializedState );
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter', serializedState);
    } catch {
        // ignore write errors
    }
};

