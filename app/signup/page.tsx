import Link from 'next/link'
import SignupForm from '../ui/signup-form'

export default function SignUpPage() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <div>
        <SignupForm />
      </div>
      <div>
        <p>Have an account?</p>
        <Link href={'/login'}>Log in</Link>
      </div>
    </>
  )
}
