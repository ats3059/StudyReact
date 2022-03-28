
import {useState , useEffect} from 'react';

function App() {
  const [coins,setCoins] = useState([]);
  const [load,setLoad] = useState(true);
  const [myCoin,setMyCoin] = useState(0);
  const [conPr,setCoinPr] = useState(0);
  const onChange = (event) =>{
    setMyCoin(event.target.value);
  }
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((res) => res.json())
      .then((resJson) => {
        setCoins(resJson);
        setCoinPr(resJson[0].quotes.USD.price);
        setLoad(false);
      })
  },[])
 



  return (
    <div className="App">
      <h3>BTC Check : BTC {`length ${coins.length}`}</h3>
      <h4>{load ? `Loding....` : null}</h4>
      얼마있뉘?<input value={myCoin} type="number" onChange={onChange}/>
      <br/>
      <select hidden={load} onChange={(event)=>setCoinPr(event.target.value)}>
       {
        coins.map((coin,index)=> 
            (
              <option value={coin.quotes.USD.price} key={index}>{`coinName : ${coin.name} USD :${coin.quotes.USD.price}`}</option>
            )
          )
        }
      </select>
      <br/>
      현재 소지금으로 구매 가능한 코인의 양은..? {myCoin > 100  ? myCoin/conPr : null}
   
    </div>
    
  );
}

export default App;
