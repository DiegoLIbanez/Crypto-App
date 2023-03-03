import React from 'react'
import TableCoins from './TableCoins'

const FilaCoins = ({monedas, search}) => {

 const monedasFiltradas = monedas.filter((moneda) => 
    moneda.name.toLowerCase().includes(search.toLowerCase()) |
    moneda.symbol.toLowerCase().includes(search.toLowerCase())    
    );
 

  return (
    <div>
        <table className='table table-dark  mt-4 table-hover'>
            <thead >
                <tr>
                    <td>#</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>24h</td>
                    <td>Precio Volumen</td>
                    <td>Volumen 24h</td>
                    <td>Cap. del mercado</td>
       

                </tr>
            </thead>
            <tbody>
                {monedasFiltradas.map((monedas, index) => (
                   <TableCoins monedas={monedas} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default FilaCoins