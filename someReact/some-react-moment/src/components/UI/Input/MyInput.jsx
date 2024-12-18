import React from "react";
import classes from "./MyInput.module.css"
export const MyInput = (props) => {
    return(
<input type="text" className = {classes.myinput} {...props}/>
    )
}
export default MyInput