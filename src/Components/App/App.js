import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../../Assets/reset.css"
import "../../Assets/style.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Movies from "../Movies/Movies"
import Sessions from "../Sessions/Sessions"
import Seats from "../Seats/Seats"
import Ticket from "../Ticket/Ticket"
import { useState } from "react"
import axios from "axios"

export default function App(){

const [ticket, setTicket] = useState(
    {
        title: "",
        date: "",
        time: "",
        selected: "",
        id: "",
        nome: "",
        cpf: "",
    })

function data(title, date, time, selected, id, nome, cpf){
    setTicket({...ticket, 
        title: title,
        date: date,
        time: time,
        selected: selected,
        id: id,
        nome: nome,
        cpf: cpf,
    })
    const reserved = {
        ids: {selected},
        name: nome,
        cpf: cpf
    } 

    const requisition = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", reserved)
}

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/sessoes/:idFilme" element={<Sessions/>}/>
                <Route path="/assentos/:idSessao" element={<Seats data={data}/>}/>
                <Route path="/sucesso" element={<Ticket ticket={ticket}/>}/>
            </Routes>
        </BrowserRouter>
    )
}