'use client'

import { signIn } from "next-auth/react"

const Button = (props) => {

	return (
		<button onClick={
			() => {
				signIn(`${props.provider}`, { callbackUrl: '/'})
			}
		}>
			{props.text}
		</button>
	)
}

export default Button