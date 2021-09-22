import React, { useState } from "react";

const Checkboxes = (props) => {

    const [selected, setSelected] = useState([])

    const handleChange = (item) => {
        if (selected.includes(item)) {
            const newSelected = [...selected];
            newSelected.splice(selected.indexOf(item), 1);
            return setSelected(newSelected);
        }
        const newSelected = [...selected];
        newSelected.push(item);
        return setSelected(newSelected);
    }

    return (
        <from>
            {props.data.map((item) => {
                return (
                    <React.Fragment key={Math.random()}>
                        <label>
                            <input type="checkbox"
                                checked={selected.includes(item) ? true : false}
                                onChange={() => handleChange(item)}
                                name={item}
                                value={item}
                            />
                                {item}
                        </label>
                        <br />
                    </React.Fragment>
                )
            })}
        </from>
    )
}
export default Checkboxes;