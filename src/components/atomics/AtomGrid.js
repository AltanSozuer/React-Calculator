import React from "react";

export default function AtomGrid({
    className,
    item
}){

    return (
        <div
            className = {className}>
            {item}

        </div>
    )
}