import { Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Maps from "./Pages/Maps/Maps"

function App() {
    return (
        <main className="min-w-full min-h-screen">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/maps/:map" element={<Maps/>}/>
            </Routes>
        </main>
    )
}

export default App
