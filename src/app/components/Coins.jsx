import Image from 'next/image';
import React from 'react'

const Coins = ({coinsdata}) => {

  if (!coinsdata || coinsdata.length === 0) {
    return <div>Nenhum dado de moeda disponível no momento.</div>;
  }

  return (
    <>
    <ul className='grid grid-cols-4 mx-auto max-w-[1260px] gap-10 mt-14'>
      {coinsdata.map(coin => (
        <li key={coin.uuid} className='flex flex-col items-center justify-center'>
          <Image 
            src={coin.iconUrl}
            alt={coin.name}
            width={70}
            height={70}
            priority
            style={{height: 'auto'}}
/>
          <h3>{coin.name}</h3>
          <p>{coin.symbol}</p>
          <p>{coin.price}</p>
        </li>
      ))}
    </ul>
    </>  
  )
}

export default Coins