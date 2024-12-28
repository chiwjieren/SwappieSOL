import Header from './components/Header'
import CoinMarquee from './components/CoinMarquee'
import SwapInterface from './components/SwapInterface'
import TokenBalance from './components/TokenBalance'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CoinMarquee />
      <main className="flex-grow p-4 max-w-4xl mx-auto w-full">
        <SwapInterface />
        <TokenBalance />
      </main>
    </div>
  )
}
