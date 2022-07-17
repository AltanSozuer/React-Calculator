import React from "react";
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

export default function AtomButton({
    classes,
    variant,
    size,
    color,
    text,
    onClick
}){
    return (
        <>
            <Button
                classes = {classes}
                variant = {variant}
                size = {size}
                color = {color}
                onClick = {onClick}
            >
            {text}
            </Button>    
        </>
    )
}

AtomButton.defaultProps = {
    size : "medium",
    color : "secondary"
}

AtomButton.propTypes = {
    classes : PropTypes.string,
    variant : PropTypes.string,
    size : PropTypes.string,
    color : PropTypes.string,
    text : PropTypes.string,
    onClick : PropTypes.func
} 