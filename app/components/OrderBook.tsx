import React from 'react';

export default function OrderBook() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Order Book</h2>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>Price (USDC)</div>
        <div>Amount (SOL)</div>
        <div>Total</div>
        {/* Ask orders */}
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={`ask-${i}`}>
            <div className="text-red-400">{(50 - i * 0.1).toFixed(2)}</div>
            <div>{(Math.random() * 10).toFixed(2)}</div>
            <div>{((50 - i * 0.1) * (Math.random() * 10)).toFixed(2)}</div>
          </React.Fragment>
        ))}
        <div className="col-span-3 border-t border-b border-gray-600 my-2"></div>
        {/* Bid orders */}
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={`bid-${i}`}>
            <div className="text-green-400">{(49 - i * 0.1).toFixed(2)}</div>
            <div>{(Math.random() * 10).toFixed(2)}</div>
            <div>{((49 - i * 0.1) * (Math.random() * 10)).toFixed(2)}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
