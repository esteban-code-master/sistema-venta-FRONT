import React from 'react'
import IconRegis from '../../../public/icon/icon52.png'
import FlechaDer from '../../../public/icon/flechaDer.png'
import Factura from '../../../public/icon/factura.png'
import Stockreal from '../../../public/icon/stockreal.png'
import Devoluciones from '../../../public/icon/devoluciones.png'
export const Prueba = () =>
{
    return (
        <div className="padre">
            <div className = "iconos" id="corte">
                <img src={IconRegis} className = "imagenes"></img>
                Corte
                <br></br>
                10
                <div className="foot"></div>
            </div>
            <div className="iconos" id="factura">
            <img src={Factura} className="imagenes"></img>
                Factura
                <br></br>
                10
                <div className="foot"></div>
            </div>
            <div className="iconos" id="devoluciones">
                Devoluciones
                <br></br>
                10
                <img src={Devoluciones} className="calculadora"></img>
                <div className="foot"></div>
            </div>
            <div className="iconos" id="stock_Aler">
            <img src={Stockreal} className="imagenes"></img>
                Stock Alerta
                <br></br>
                10
                <div className="foot"></div>
            </div>
        </div>
    )
}