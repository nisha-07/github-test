import classes from "./GitHubInput.module.scss"
import { useState } from "react"
import InputBox from "../../common/InputBox/InputBox"
import { getUserInfo } from "../../apis/gitHubAPIs"
import Button from "../../common/Button/Button"
import KeyValue from "../../common/KeyValue/KeyValue"

const GitHubInput = () => {
	const [inputValue, setInputValue] = useState("")
	const [userDetail, setUserDetail] = useState()

	const getUserAPI = `${getUserInfo}${inputValue}`

	const onChange = (value) => { 
		setInputValue(value)
	}

	const handleClick = () => {
		fetch(getUserAPI).then((response) => {
			return response.json();
			})
			.then(data => setUserDetail(data))
			.catch(error => {
			console.error(error)
			alert(error)
		})
	}

	return (
		<div className={classes["gitHub-info"]}>
			<InputBox {...{ label: "GitHub user", onChange }} />
			<Button {...{ label: "Get User Data", handleClick }} />
			{userDetail &&
				<>
					<KeyValue {... { key: "Name", value: userDetail.name }} />
					<KeyValue {...{ key: "Company", value: userDetail.company }} />
					<KeyValue {...{ key: "Followers", value: userDetail.followers }} />	
					<KeyValue {...{ key: "Following", value: userDetail.following }} />
				</>
			}
		</div>
	)
}

export default GitHubInput
