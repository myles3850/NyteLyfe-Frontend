import { Route } from "react-router-dom";
import Home from "./pages/public/Home";

function App() {
	return <Route path="/" element={<Home />}></Route>;
}

export default App;
