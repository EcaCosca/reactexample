import React from "react";

// One method
// export default ({atext, alertText}) => <button onClick={alert(alertText)}> {atext}</button>;

// Second method
const SuperButton = ({atext, alertText}) => {
    const handleClick = () => {
        alert(alertText)
    }
    
    return (
        <button onClick={handleClick}> {atext}</button>
        )
};
export default SuperButton