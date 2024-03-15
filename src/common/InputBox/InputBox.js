import classes from "./InputBox.module.scss"
import React, { useState } from 'react'

const InputBox = ({ label, onChange }) => {
	const [value, setValue] = useState(""
	)

	const handleChange = (e) => { 
		setValue(e.target.value)
		onChange(e.target.value)
	}
	
	return (
		<div className={classes.input}>
			<label>
				{label}
					<input type="text" value={value} onChange={handleChange} className={classes.box} />
			</label>
		</div>
	)
}

export default InputBox
