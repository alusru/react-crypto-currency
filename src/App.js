import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Crypto from './Crypto';

function App() {


const [cryp,setCurr] = useState([]);
const [search, setSearch]= useState('');  
useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 .then(res => {
   setCurr(res.data);
   console.log(res.data);
 })
 .catch(error => console.log(error));
},[]);


const filterSearch = cryp.filter(crypto =>
  crypto.name.toLowerCase().includes(search.toLowerCase())
);




const formChange = event => {
  setSearch(event.target.value);
}
  return (
    <div className="crypto">
      <div className="cypto-search"> 
      <form>
        <input type="text" onChange={formChange} className="cypto-input" placeholder="USD" />
      </form>
      </div>
    {filterSearch.map(td => {
      console.log(td);
      return(
        <Crypto key={td.id} name={td.name} image={td.image}  priceChange={td.price_change_percentage_24h} volume={td.total_volume} symbol={td.symbol} price={td.current_price}  />
      ) 
    })}
    </div>
  );
}

export default App;
