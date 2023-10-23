'use client'

import { useState, useEffect } from "react"
import Coins from "./components/Coins";
import SearchCoin from "./components/SearchCoin";

export default function Home() {
  const [coinsdata, setCoinsData] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('/api/coins');
      const responsedata = await response.json();
      setCoinsData(responsedata.data.coins)
    }
    
    getCoins();
  }, []);

  return (
    <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">Crypto Coins</h1>
      <SearchCoin />
      <Coins coinsdata={coinsdata} />
    </div>
  )
}
