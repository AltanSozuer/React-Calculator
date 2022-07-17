import React from "react";
import AtomGrid from "../atomics/AtomGrid";
import AtomButton from "../atomics/AtomButton";

export default function MoleculButtonsWithGrid({
    gridClassName,
    button_variant,
    button_size,
    button_color,
    button_text,
    button_onClick
})
{
    return (
        <AtomGrid
                className={gridClassName}
                item = {
                    <AtomButton
                        variant = {button_variant}
                        size = {button_size}
                        color = {button_color}
                        text = {button_text}
                        onClick = {button_onClick} />
                        } >
        </AtomGrid>
    )
}