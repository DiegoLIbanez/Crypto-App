import { useEffect, useState } from "react";
import axios  from "axios";
import FilaCoins from './components/FilaCoins'


function App() {
  
  const [monedas, setMonedas] = useState([])
  const [search, setSearch] = useState('')

  const getCoins = async() => {
    try {
      const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
      setMonedas(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCoins()
  }, [])
  
  return (
    <div className="container">
          <div className="row">
          <h1 className="text-center p-4">Coin Market</h1>

          <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light borde-0 text-center" 
              onChange={e => setSearch(e.target.value)}
          />
          <FilaCoins monedas={monedas} search={search}/>
          </div>

    </div>
  );
}

export default App;
