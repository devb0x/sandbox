import Button from "@/app/components/Button"

import { signIn } from "next-auth/react"

const SignIn = () => {
	return (
		<div>
			<h1>SignIn page / compo</h1>

			<Button provider='github' text='github'/>
			<br/>
			<Button provider='google' text='google'/>

		</div>
	)
}

export default SignIn