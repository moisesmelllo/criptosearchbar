import { NextResponse } from "next/server";
import axios from "axios";


async function fetchCoins() {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'b358f8502emsh29e34bb82c9cf13p1dab5bjsn551d50b590f9',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request) {
  const coins = await fetchCoins();
  const {searchParams} = new URL(request.url)
  const query = searchParams.get('query')

  const filteredCoins = coins.data.coins.filter((coin) => {
    return coin.name.toLowerCase().includes(query.
    toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
  })

  return NextResponse.json(filteredCoins)
}