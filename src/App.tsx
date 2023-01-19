import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingsCounter from "./components/SettingsCounter/SettingsCounter/SettingsCounter";

function App() {

    const [count, setCount] = useState(0)
    const [settings, setSettings] = useState(false)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [disabled, setDisabled] = useState(false)


    useEffect(() => {
        let startValueAsString = localStorage.getItem('counterStartValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
            setCount(newStartValue)
        }

        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    const settingsDisabled = startValue < 0
        || maxValue < 0
        || startValue === maxValue
        || maxValue < startValue

    const setToLocalStorage = () => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))

        setCount(startValue)
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))

        setDisabled(false)
    }

    const increaseCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }

    }

    const resetCount = () => {
        setCount(startValue)
    }

    const setHandler = () => {
        setSettings(true)
    }

    const onChangeStartValue = (startValue: number) => {
        setStartValue(startValue)
        setDisabled(true)
    }

    const onChangeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        setDisabled(true)
    }


    return (
        <div className="App">
            {settings
                ? <SettingsCounter maxValue={maxValue}
                                   startValue={startValue}
                                   setToLocalStorage={setToLocalStorage}
                                   onChangeStartValue={onChangeStartValue}
                                   onChangeMaxValue={onChangeMaxValue}
                                   setSettings={setSettings}
                                   disabled={settingsDisabled}
                />
                : <Counter count={count}
                           maxValue={maxValue}
                           setCount={setCount}
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
