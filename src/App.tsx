import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingsCounter from "./components/SettingsCounter/SettingsCounter/SettingsCounter";
import {
    increaseCountAC,
    resetCountAC,
    setCountAC,
    setMaxValueAC,
    setStarValueAC
} from "./components/reducers/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectCount, selectMaxValue, selectStartValue} from "./components/selectors/selectors";

function App() {

    const [settings, setSettings] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const startValue = useSelector(selectStartValue)
    const maxValue = useSelector(selectMaxValue)
    const count = useSelector(selectCount)

    const dispatch = useDispatch()

    const settingsDisabled = startValue < 0
        || maxValue < 0
        || startValue === maxValue
        || maxValue < startValue

    useEffect(() => {
        dispatch(setCountAC(startValue))
    }, [dispatch, startValue])

    const increaseCount = () => {
        if (count < maxValue) {
            dispatch(increaseCountAC())
        }
    }

    const undisableButtons = ()=>{
        setDisabled(false)
    }

    const resetCount = () => {
        dispatch(resetCountAC(startValue))
    }

    const setHandler = () => {
        setSettings(true)
    }

    const onChangeStartValue = (startValue: number) => {
        dispatch(setStarValueAC(startValue))
        setDisabled(true)
    }

    const onChangeMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
        setDisabled(true)
    }


    return (
        <div className="App">
            {settings
                ? <SettingsCounter maxValue={maxValue}
                                   startValue={startValue}
                                   onChangeStartValue={onChangeStartValue}
                                   onChangeMaxValue={onChangeMaxValue}
                                   setSettings={setSettings}
                                   disabled={settingsDisabled}
                                   undisableButtons={undisableButtons}
                />
                : <Counter count={count}
                           maxValue={maxValue}
                           setSettings={setSettings}
                           increaseCount={increaseCount}
                           resetCount={resetCount}
                           setHandler={setHandler}
                           disabled={disabled}/>
            }
        </div>
    );
}

export default App;
