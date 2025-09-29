// app/profile/page.tsx
import { getSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>ログイン中のユーザーID: {session.userId}</p>
    </div>
  )
}
