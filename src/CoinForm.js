import React from 'react'

function CoinForm({onSelect, coinList}) {
  return (
    <div className='input-group mt-3 w-50 mx-auto'>
        <select onChange={onSelect} className='w-100' options={coinList}>

        <option></option>
        </select>
      
    </div>
  )
}

export default CoinForm