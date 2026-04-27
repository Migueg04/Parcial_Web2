import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { HomePage } from "./pages/HomePage";
import { ReservePage } from "./pages/ReservePage";
function App() {
	return <>
		<AppContextProvider>
			<Routes>
				<Route path="/" element = {<HomePage/>}/>
				<Route path="/reserve" element = {<ReservePage></ReservePage>}></Route>
			</Routes>
		</AppContextProvider>
	</>;
}

export default App;
