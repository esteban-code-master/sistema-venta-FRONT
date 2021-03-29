import React, { useState } from 'react'
import '../style.scss'


const Table = (props) => {  
    const {theme,defaultWith} = props
    const title = [
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "Cvreovmo"},
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "CANTIDAD"},
        {"col" : "Cvreovmo"},
        {"col" : "Cvreovmo"},
        {"col" : "final"},
    ]

    const row = [        
        
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},          
            {col :"omfop4m"},   
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},
        ],
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},                        
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},              
        ],
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},                        
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},
        ],
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},                        
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},
        ],
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},                        
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
        ],
        [  
            {col :"omfop4m"},
            {col :"omfop4m"},
            {col :"omfop4m"},                        
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
            {col :"bmrpmbo rekg mermg ogmpr gmprmgpi mrimge rigme rimgeriomge rimgie rmgerim gio  gmmrigmei rgmiermgimg  rignri ns"},  
        ],
           
    ]
    return(
        <React.Fragment>
            <div className = "tableContainer">
                <table className = "table">
                    <thead className = "table__head">
                        <tr className = "table__rowHead">                            
                            {            
                                title.map((name,index)=>[                                    
                                    <th key = {index}>{name.col}</th>                            
                                ])
                            }                                                           
                        </tr>
                    </thead>                        
                    <tbody className = {`table__body ${theme}`}>
                        {
                            row.map((name,index)=>[
                                <tr key = {index}>
                                    {
                                        name.map((col)=>[
                                            <td>
                                                {col.col}
                                            </td>
                                        ])                                                                                
                                    }
                                </tr>
                            ])
                        }                        
                    </tbody>               
                </table>
            </div>
        </React.Fragment>
    )
}

export default Table