import { signup } from '../actions/auth'

export default function SignupForm() {
  return (
    <form action={signup}>
      <button type="submit">Sign Up</button>
    </form>
  )
}