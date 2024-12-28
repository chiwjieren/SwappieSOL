'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowUpDown } from 'lucide-react'

const tokens = ['SOL', 'USDC', 'RAY', 'SRM']

export default function SwapInterface() {
  const [fromToken, setFromToken] = useState(tokens[0])
  const [toToken, setToToken] = useState(tokens[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')

  const handleFromAmountChange = (value: string) => {
    // Only allow non-negative integers
    const numericValue = value.replace(/[^0-9]/g, '');
    setFromAmount(numericValue);
    // Simple conversion (1:1 ratio for demonstration)
    setToAmount(numericValue);
  };

  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="bg-[#1c1c28] p-6 rounded-xl max-w-md w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">Swap</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">From</label>
          <div className="flex space-x-2">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="0"
              className="flex-grow bg-[#2c2d3a] border-[#3c3d4a] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
            />
            <Select value={fromToken} onValueChange={setFromToken}>
              <SelectTrigger className="w-[100px] bg-[#2c2d3a] border-[#3c3d4a]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2c2d3a] border-[#3c3d4a]">
                {tokens.map(token => (
                  <SelectItem key={token} value={token}>{token}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={swapTokens}
            className="rounded-full bg-[#2c2d3a] hover:bg-[#3c3d4a]"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To</label>
          <div className="flex space-x-2">
            <Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="0"
              className="flex-grow bg-[#2c2d3a] border-[#3c3d4a] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={toAmount}
              readOnly
            />
            <Select value={toToken} onValueChange={setToToken}>
              <SelectTrigger className="w-[100px] bg-[#2c2d3a] border-[#3c3d4a]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2c2d3a] border-[#3c3d4a]">
                {tokens.map(token => (
                  <SelectItem key={token} value={token}>{token}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full bg-[#9945FF] hover:bg-[#7a37cc] text-white">Swap</Button>
      </div>
    </div>
  )
}
