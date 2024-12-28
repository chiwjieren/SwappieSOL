const tokens = [
    { name: 'SOL', balance: '10.5' },
    { name: 'USDC', balance: '100.0' },
    { name: 'RAY', balance: '50.0' },
    { name: 'SRM', balance: '25.0' },
  ]
  
  export default function TokenBalance() {
    return (
      <div className="bg-[#1c1c28] p-6 rounded-xl max-w-md w-full mx-auto mt-6">
        <h2 className="text-xl font-bold mb-4">Token Balances</h2>
        <div className="space-y-2">
          {tokens.map(token => (
            <div key={token.name} className="flex justify-between items-center">
              <span>{token.name}</span>
              <span>{token.balance}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  