import React from "react";
import classes from "./MyButton.module.css"
export const MyButton = ({children, ...props}) => {
    return(
<button {...props} className={classes.mybutton}>
{children}
</button>

    )
}
export default MyButton