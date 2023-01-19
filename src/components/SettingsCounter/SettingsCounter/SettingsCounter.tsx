import React from 'react';
import Button from "../../Button/Button";
import SettingsDisplay from "./SettingsDisplay/SettingsDisplay";
import s from './SettingsCounter.module.css'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    setToLocalStorage: () => void
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void
    setSettings: (value: boolean) => void
    disabled: boolean
}

const SettingsCounter = (props: SettingsCounterPropsType) => {

    const setToLocalStorage = () => {
        props.setToLocalStorage()
        props.setSettings(false)
    }


    return (
        <div className={s.wrapper}>
            <SettingsDisplay startValue={props.startValue} maxValue={props.maxValue}
                             onChangeStartValue={props.onChangeStartValue} onChangeMaxValue={props.onChangeMaxValue}/>
            <div className={s.buttonWrapper}><Button title={'set'} callback={setToLocalStorage} disabled={props.disabled}/></div>
        </div>
    );
};

export default SettingsCounter;