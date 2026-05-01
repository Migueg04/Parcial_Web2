import { useNavigate } from "react-router-dom"
import { Filter } from "../components/Filter"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Card } from "../components/Card"

export const ReservePage = () =>{
    const {availableRooms, reservedId, reservations} = useContext(AppContext)
    const navigate = useNavigate();

    const totalEspacios = availableRooms.length
    const disponibles = availableRooms.filter((r) => r.available).length
    const reservasActivas = reservedId.length
    const ingresoTotal = reservations.reduce((acc, r) => acc + r.total, 0)

    return(
        <div>
            <button onClick={() => navigate("/")}>Ir a salas</button>

            <div>
                <h2>Resumen</h2>
                <p>Total espacios: {totalEspacios}</p>
                <p>Disponibles: {disponibles}</p>
                <p>Reservas activas: {reservasActivas}</p>
                <p>Ingreso total: ${ingresoTotal}</p>
            </div>
            <h1>Reservas</h1>

            <Filter/>
            <div>
                {reservedId.map((id) => {
                    const room = availableRooms.find((i) => i.id === id)
                    return <Card key={id} room={room}/>
                })}
            </div>
        </div>
    )
}