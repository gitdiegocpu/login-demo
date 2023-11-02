

import { SignInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils"

export default function LoginForm() {
    const handleSignup = async (e) => {
        e.preventDefault()
        const email= e.target.email.value
        const password = e.target.password.value
        const response = await SignInWithEmailAndPassword(auth, email, password)
           .catch (err => alert(err.message))
        console.log(response.user)   

    }
    return(

      <form onSubmit = { handleSignup}>
    <label htmlFor="email" >
      Email:
      <input type="email" name="email" />
    </label>
    <label htmlFor="password">
      Password:
      <input type="password" name="password" />
    </label>
    <input type="submit" value="Sign Up" />
  </form>
      )



}