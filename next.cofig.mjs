'use client'

import { useEffect } from 'react'

export default function CoinGeckoWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Real-time Prices</h2>
      <coingecko-coin-price-chart-widget 
        coin-id="solana" 
        currency="usd" 
        height="300" 
        locale="en" 
        background-color="#1f2937"
        ></coingecko-coin-price-chart-widget>
    </div>
  )
}
