import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tradingPairs = ['SOL/USDC', 'RAY/USDC', 'SRM/USDC', 'FIDA/USDC']

export default function TradingPairSelector() {
  return (
    <Select defaultValue={tradingPairs[0]}>
      <SelectTrigger className="w-[180px] bg-gray-700 text-white">
        <SelectValue placeholder="Select pair" />
      </SelectTrigger>
      <SelectContent className="bg-gray-700 text-white">
        {tradingPairs.map((pair) => (
          <SelectItem key={pair} value={pair}>{pair}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
