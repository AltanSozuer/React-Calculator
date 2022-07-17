import React from "react";
import PropTypes from 'prop-types'
import { TextField } from "@mui/material";

export default function AtomTextField({
    variant,
    size,
    color,
    value,
    disabled,
    sx,
    onClick
}){
    
    return (
        <TextField
            variant = {variant}
            size = {size}
            color = {color}
            value = {value}
            sx = {sx}
            disabled = {disabled}
            onClick = {onClick}
        >
            
        </TextField>
    )
}

AtomTextField.defaultProps = {
    size : "large",
    color : "primary"
}

AtomTextField.propTypes = {
    classes : PropTypes.string,
    variant : PropTypes.string,
    size : PropTypes.string,
    color : PropTypes.string,
    value : PropTypes.string,
    onClick : PropTypes.func
}