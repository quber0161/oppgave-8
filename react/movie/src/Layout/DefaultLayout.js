import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <main className="w-full bg-red-400 h-screen">
      <Outlet />
    </main>
  )
}