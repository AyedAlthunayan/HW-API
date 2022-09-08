import { useEffect, useState } from 'react';
import './App.css';
import CoinForm from './CoinForm';
import FirstOne from './FirstOne';
import Header from './Header';


// https://api.coincap.io/v2/assets?limit=20

//https://cryptoflash-icons-api.herokuapp.com/svg/color/eth



function App() {

  const [coins, setCoins] = useState([])
  const [pic, setPic] = useState()
  const [source, setSource] = useState()
  const [coinList, setCoinList] = useState([]);



  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=10`)
      const data = await res.json()
      setCoins(data.data)
    }

    fetchCoins()
  })

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://cryptoflash-icons-api.herokuapp.com/svg/color/${pic}`)
      const data = res
      console.log(data);
      setPic(coins.symbol)
      setSource(`https://cryptoflash-icons-api.herokuapp.com/svg/color/`)
     
    }

    fetchCoins()
  },[])

  const onSelect = async (option) => {
    console.log(option);
    const request = await fetch(
      'https://api.coincap.io/v2/assets/' + option.value
    );
    const data = await request.json();
    setCoins(data.data)
    
  };

  return (
    <div  className='row coin'>
      
      <table>
      <Header />
       
       <tr>
       <FirstOne/>
         </tr>

        <tbody>
          {coins.map(({ id, name, rank, priceUsd }) => (
            <tr key={id}>
              <td>{rank} -  </td>
              <td>{name}</td>
              <td>${parseInt(priceUsd)}</td>
              <td><img alt='coin img' src={source} />
              
              
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="input-group mb-3">
      <input type="text"  className="form-control" placeholder="Enter a currency name"/>
      <button className="btn btn-outline-secondary" type="button" >search</button>
            </div>


      
    </div>
  );
}

export default App;
