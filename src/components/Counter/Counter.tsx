import React from 'react';
import Button from '../Button/Button';
import s from './Couner.module.css'

type CounterType = {
    count: number
    maxValue: number
    setCount: (count: number) => void
    setSettings: (value: boolean) => void
    increaseCount: () => void
    resetCount: () => void
    setHandler: () => void
    disabled: boolean
}

const Counter = (props: CounterType) => {


    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <div className={props.count === props.maxValue ? s.red  : s.count}>{props.count}</div>
            </div>

            <div className={s.buttonWrapper}>
                <Button title={'inc'} callback={props.increaseCount} disabled={props.count === props.maxValue || props.disabled}/>
                <Button title={'reset'} callback={props.resetCount} disabled={props.count === 0 || props.disabled}/>
                <Button title={'set'} callback={props.setHandler}/>
            </div>

        </div>
    );
};

export default Counter;