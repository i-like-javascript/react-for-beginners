import { useEffect, useState } from "react"

const CoinTracker=()=>{
    const [loading,setLoading]=useState(true)
    const [coins,setCoins]=useState([])
    const [money,setMoney]=useState()
    const saveMoney=(e)=>{
        setMoney(e.target.value)
    }
    const [coin,setCoin]=useState()
    const changeOption=(e)=>{
        setCoin(e.target.value)
    }

    useEffect(()=>{
        // Promise반환
        fetch('https://api.coinpaprika.com/v1/tickers')
            // response는 resolve가 데리고 있는 값?
            .then(response=>{
                return response.json()
            })
                .then(json=>{
                    setCoins(json)
                    setLoading(false)
                })
    },[])
    return (
        <div>
            <h1>the coins</h1>
            <form>
                {loading ? <strong>Loading...</strong> : 
                    <select id="selectCoin" onChange={changeOption} >
                        {coins.map(coin=>{
                            return <option value={Math.round(coin.quotes.USD.price)} key={coin.id}>{coin.name} ({coin.symbol}) : ${Math.round(coin.quotes.USD.price)} USD</option>
                        })}
                    </select>}
                <div>
                    <input type="number" value={money} onChange={saveMoney} />
                </div>
                <div>
                    <input type="number" value={money/coin} />
                </div>
            </form>
        </div>
    )
}

export default CoinTracker