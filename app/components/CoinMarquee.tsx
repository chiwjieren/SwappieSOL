'use client'

import { useEffect } from 'react'

export default function CoinMarquee() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full bg-[#1c1c28] py-2">
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,solana,usd-coin,raydium,serum"
        currency="usd"
        background-color="#1c1c28"
        font-color="#ffffff"
        locale="en"
      ></coingecko-coin-price-marquee-widget>
    </div>
  )
}
