import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export const Filter = () => {
    const {filters, setFilters} = useContext(AppContext)
    
    return (
        <div>
            <select value={filters.type} onChange={(e) => setFilters ({...filters,type : e.target.value})}>
                <option value="">Todos los tipos</option>
                <option value="meeting room">meeting room</option>
                <option value="private office">private office</option>
                <option value="shared desk">shared desk</option>
                <option value="creative room">creative room</option>
            </select>

            <select value={filters.available} onChange={(e) => setFilters ({...filters,available : e.target.value})}>
                <option value="">Todas las salas</option>
                <option value="disponible">disponible</option>
                <option value="no disponible">no disponible</option>
            </select>
        </div>
    )
}