import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button className={s.button} onClick={props.callback} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};

export default Button;