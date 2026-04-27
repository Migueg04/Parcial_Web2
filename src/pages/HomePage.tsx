import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Card } from "../components/Card"

export const HomePage = () =>{
    const {availableRooms} = useContext(AppContext)

    return(
        <div>
            <h1>Hola</h1>

            <div>
                {availableRooms.map((room) => (
                    <Card key={room.id} room={room}></Card>
                ))}
            </div>
        </div>
    )
}