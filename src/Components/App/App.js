import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../Assets/reset.css"
import "../../Assets/style.css"
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
                <Route path="/sessoes/:idFilme" element={<Sessions/>}/>
                <Route path="/assentos/:idSessao" element={<Seats/>}/>
                <Route path="/sucesso" element={<Ticket/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}