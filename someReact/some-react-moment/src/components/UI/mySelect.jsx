import React from "react";
export const MySelect = ({ option, defaultValue, value, onChange }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>

            <option disabled value=''>{defaultValue}</option>

            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)
            }


        </select>

    )
}
export default MySelect