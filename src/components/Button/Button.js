import classname from 'classnames';
import React from 'react';

const PrimaryBtn = props =>
  <Btn {...props} primary />

const Btn = ({className, primary, ...props}) => {
    return (<button type="button" className={classname(
        "btn",
        primary && "btn-primary",
        className
    )} {...props}>
    </button>);
}

export {Btn, PrimaryBtn};