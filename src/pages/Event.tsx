import { Header } from "../components/Header"
import { Links } from "../components/Links"

export function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Links />
      </main>
    </div>

  )
}