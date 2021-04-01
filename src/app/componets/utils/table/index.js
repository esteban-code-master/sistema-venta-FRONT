import React, { useState } from 'react'
import '../style.scss'


const Table = (props) => {    
    const {theme,height,title,row} = props
    const [tabla,setTable] = useState({
        title :  title,
        theme : theme,
        height : height,
        row : row
    })
   
    return(
        <React.Fragment>                     
            <div className = "tableContainer" style ={{height : tabla.height}}>
                <table className = "table">
                    <thead className = "table__head">
                        <tr className = "table__rowHead">                            
                            {         
                                tabla.title?   
                                tabla.title.map((name,index)=>[                                    
                                    <th key = {index}>{name.column}</th>                            
                                ])
                                :null
                            }                                                           
                        </tr>
                    </thead>                        
                    <tbody className = {`table__body ${tabla.theme}`}>
                        {
                            tabla.row?
                            tabla.row.map((column,index)=>[
                                <tr key = {index}>
                                    {
                                        column.map((name,index)=>[
                                            <td key = {index}>
                                                {name.column}
                                            </td>
                                        ])                                                                                
                                    }
                                </tr>
                            ])
                            : null
                        }                        
                    </tbody>               
                </table>
            </div>
        </React.Fragment>
    )
}

export default Table