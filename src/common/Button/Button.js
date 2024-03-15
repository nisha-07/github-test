import classes from "./Button.module.scss"

const Button = ({ label, handleClick }) => {
		return (
				<button onClick={handleClick} className={classes.button}>{label}</button>
		)
	}
	
	export default Button
	