 import Decimal from 'decimal.js-light'
import React from 'react'
 const TableCoins = ({monedas, index}) => {
   return (
    <tr>
        <td>{index}</td>
        <td>
            <img style={{width: '3%'}} className='img-fluid me-4' src={monedas.image} alt="" />
            <span>{monedas.name}</span> 
            <span className='ms-3 text-muted text-uppercase'>{monedas.symbol}</span>
        </td>
         <td>{new Intl.NumberFormat("en-US").format(monedas.current_price)} US$</td>
         <td className={monedas.market_cap_change_percentage_24h > 0  ? 'text-success' : 'text-danger'}>
            {monedas.market_cap_change_percentage_24h}
        </td>
         <td className={monedas.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
            {monedas.price_change_percentage_24h}
        </td>
         <td>{new Intl.NumberFormat("en-US").format(monedas.total_volume)} US$</td>
         <td>{new Intl.NumberFormat("en-US").format(monedas.market_cap)} US$</td>
    </tr>
   )
 }
 
 export default TableCoins
 