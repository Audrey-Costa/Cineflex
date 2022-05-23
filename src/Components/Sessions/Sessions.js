import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Session from "../Session/Session";
import Footer from "../Footer/Footer"

export default function Sessions(){
    const { idFilm } = useParams();
    const [film, setFilm] = useState({})
    const [ready, setReady] = useState(false)
    const [other, setOther] = useState(false)
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/4/showtimes`)

        promise.then((answer) => {
            setFilm(answer.data)
            setReady(true)})
    },[])

    function farofa(element){
        if(element === "posterURL"){
            console.log(film.posterURL)

            return film.posterURL
        }
        if(element === "title"){
            console.log(film.title)
            return film.title
        }
    }    
    return (
        <>
            <SubHeader><Div><p>Selecione o horário</p></Div></SubHeader>
            <Main>{ready ? film.days.map((element)=> <Session key={element.id} day={element.weekday} date={element.date} time={element.showtimes} id={element.showtimes}/>) : ""}</Main>
            <Footer> <img src={film.posterURL} alt="Filme" /><h1>{film.title}</h1></Footer>
        </>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }
`

const Main = styled.div`
    margin-bottom: 130px
`