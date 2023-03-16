import {AppRootStateType} from "../bll/store/store";

export const selectStartValue = (state: AppRootStateType)=>state.counter.startValue
export const selectMaxValue = (state: AppRootStateType)=>state.counter.maxValue
export const selectCount = (state: AppRootStateType)=> state.counter.count