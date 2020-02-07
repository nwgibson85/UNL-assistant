import React from 'react';
import './NurseVariable';

export default function NurseVariable(props) {
    const {nurseV, className, children, ...otherProps} = props;
    return React.createElement(
        props.nurseV,
        {
            className: ['nurseV', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}