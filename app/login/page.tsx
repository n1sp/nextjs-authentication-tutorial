import Link from "next/link";
import LoginForm from "../ui/login-form";

export default function loginPage() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <div>
        <LoginForm />
      </div>
      <div>
        <Link href={'/signup'}> Create New Account</Link>
      </div>
    </>
  )
}