import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData]= useState({})

    useEffect(()=>{
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //fetch(`https://api.freecurrencyapi.com/v1/status?apikey=fca_live_lIuxPyg3JMY3m88ccqmA8793JYvlodB0anLayZCl`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
console.log(data);
return data
}

export default useCurrencyInfo