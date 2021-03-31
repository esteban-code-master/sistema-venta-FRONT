import config from '../config/index'
import "core-js/stable";
import "regenerator-runtime/runtime";

export const Empleados = async (data) => {
    try 
    {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjoyLCJuYW1lIjoiZXN0ZWJhbiIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNTE3Mzk3OX0.z8OOnZFiqqgHt2jRIS1nVgwKN6UTTv1qN3k2XhLnV2M`
            await fetch(`${config.hostName}/api/empleado`,{
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
