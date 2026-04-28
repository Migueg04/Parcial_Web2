import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Card } from "../components/Card"
import { useNavigate } from "react-router-dom"
import { Filter } from "../components/Filter"

export const HomePage = () =>{
    const {availableRooms, filteredRooms} = useContext(AppContext)
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => navigate ("/reserve")}>Ir a reservadas</button>
            <h1>Lista de Salas</h1>
            <Filter></Filter>
            <div>
                {filteredRooms.map((room) => (
                    <Card key={room.id} room={room}></Card>
                ))}
            </div>
        </div>
    )
}