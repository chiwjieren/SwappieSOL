'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = async () => {
    if (typeof window.solana !== 'undefined') {
      try {
        await window.solana.connect()
        setWalletConnected(true)
      } catch (err) {
        console.error('Failed to connect wallet:', err)
      }
    } else {
      alert('Solana wallet not found! Please install a Solana wallet extension.')
    }
  }

  return (
    <header className="flex justify-between items-center p-4 bg-[#1c1c28]">
      <h1 className="text-2xl font-bold text-[#9945FF]">SwappieSOL</h1>
      <Button
        onClick={connectWallet}
        className="bg-[#9945FF] hover:bg-[#7a37cc] text-white"
      >
        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
      </Button>
    </header>
  )
}
