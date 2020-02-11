import React from 'react';
import './TechVariable';

export default function TechVariable(props) {
    const {tag, className, children, ...otherProps} = props;
    return React.createElement(
        props.tag,
        {
            className: ['techV', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

TechVariable.defaultProps ={
    tag: 'a',
}