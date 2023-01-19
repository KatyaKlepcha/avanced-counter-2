import React, {ChangeEvent, useState} from 'react';
import s from './SettingsDisplay.module.css'

type SettingsDisplayType = {
    startValue: number
    maxValue: number
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void
}

const SettingsDisplay = (props: SettingsDisplayType) => {

    const [newStartValue, setNewStartValue] = useState(props.startValue)
    const [newMaxValue, setNewMaxValue] = useState(props.maxValue)

    const errorStartValue = props.startValue < 0
        || props.maxValue === props.startValue
        || props.startValue > props.maxValue

    const errorMaxValue = props.maxValue === props.startValue
        || props.maxValue < props.startValue
        || props.maxValue < 0


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>)=>{
        setNewStartValue(+e.currentTarget.value)
        props.onChangeStartValue(+e.currentTarget.value)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>)=>{
        setNewMaxValue(+e.currentTarget.value)
        props.onChangeMaxValue(+e.currentTarget.value)
    }

    return (
        <div className={s.display}>
            <div>max value: <input value={newMaxValue}
                                   type={"number"}
                                   max="100"
                                   onChange={onChangeMaxValue}
                                   className={errorMaxValue ? s.error : ''}/>
            </div>
            <div>start value: <input value={newStartValue}
                                     onChange={onChangeStartValue}
                                     type={"number"}
                                     max="100"
                                     className={errorStartValue ? s.error : ''}/>
            </div>
        </div>
    );
};

export default SettingsDisplay;