import React from 'react';
import './NurseVariable';

export default function NurseVariable(props) {
    const {tag, className, children, ...otherProps} = props;
    return React.createElement(
        props.tag,
        {
            className: ['nurseV', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

NurseVariable.defaultProps ={
    tag: 'a',
}