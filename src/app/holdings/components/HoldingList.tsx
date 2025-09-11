import { holdings } from "@/app/data/data";
import React from "react";

export default function HoldingList() {
  return (
    <div className="w-full">
      <table className="space-x-4">
        <tr>
        <th>Instrument</th>
        <th>Qty</th>
        <th>Avg. cost</th>
        <th>LTP</th>
        <th>Cur. val</th>
        <th>P&L</th>
        <th>Net chg.</th>
        <th>Day chg.</th>
      </tr>
      {
        holdings.map((val, idx) => {
          const currVal = val.price * val.qty;
          const isProfit = currVal - val.avg * val.qty >= 0.0;
          const prof = isProfit ? "profit": "loss";
          const dayf = val.isLoss ? "loss": "profit";
          return (
            <tr key={idx}>
              <td>{val.name}</td>
              <td>{val.qty}</td>
              <td>{val.avg.toFixed(2)}</td>
              <td>{val.price.toFixed(2)}</td>
              <td>{currVal.toFixed(2)}</td>
              <td>{(currVal - val.avg * val.qty).toFixed(2)}</td>
              <td>{val.net}</td>
              <td>{val.day}</td>
            </tr>
          )
        })
      }
      </table>
    </div>
  );
}
