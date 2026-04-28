import { useNavigate } from "react-router-dom"
import { Filter } from "../components/Filter"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Card } from "../components/Card"

export const ReservePage = () =>{
    const {availableRooms, reservedId} = useContext(AppContext)
        const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate ("/")}>Ir a salas</button>
            <h1>Hola en reservas</h1>
            <Filter></Filter>
            <div>
                {reservedId.map((id) => {
                    const room = availableRooms.find((i) => i.id===id)
                    return <Card key={id} room={room}/>
                })}
            </div>
        </div>
    )
}