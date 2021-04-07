import config from '../config/index'
import "core-js/stable";
import "regenerator-runtime/runtime";

export const Empleados = async (data) => {
    try 
    {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjozLCJuYW1lIjoibHVpcyIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNDI4OTIzOH0.B8qIh0fDA51yROkSuaMn_CB56ONFS1EYVvzhDf8evVM`
            await fetch(`http://localhost:8001/api/empleado`,{
                method: "POST",
                headers: {
                    Authorization: `Bearer: ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            .then((resp) => {
                console.log(resp.json())
            })
            .catch((err) => {
                console.log(err)
            })   
    }
    catch (err) {
        console.log("Yavaliobro")
        console.log(err)
    }
}
