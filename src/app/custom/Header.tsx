import React from "react";

export default function Header() {
  return (
    <div className="w-screen">
      <div className="flex gap-10 h-20 items-center px-5 shadow">
      <div className="flex gap-7 px-5 border-r">
          <div className="flex gap-5">
            <h5>NIFTY 50</h5>
            <h5>0.00</h5>
            <h5>0</h5>
          </div>
          <div className="flex gap-5">
            <h5>SENSEX</h5>
            <h5>0.00</h5>
            <h5>0</h5>
          </div>
      </div>
      <div>
        <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="Kite" className="w-full h-6" />
        </div>
      <div className="flex gap-5 capitalize">
        <a href="/">dashboard</a>
        <a href="/orders">orders</a>
        <a href="/holdings">holdings</a>
        <a href="/postions">postions</a>
        <a href="funds">funds</a>
        <a href="apps">apps</a>
      </div>
    </div>
    </div>
  );
}
