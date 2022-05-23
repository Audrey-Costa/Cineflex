import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Movies from "../Movies/Movies"
import Sessions from "../Sessions/Sessions"
import Seats from "../Seats/Seats"
import Ticket from "../Ticket/Ticket"

export default function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/" element={<Sessions/>}/>
                <Route path="/" element={<Seats/>}/>
                <Route path="/" element={<Ticket/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}