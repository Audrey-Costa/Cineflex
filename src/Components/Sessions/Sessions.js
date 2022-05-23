import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Sessions(){
    const { idFilm } = useParams();
    const [film, setFilm] = useState({})

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)

        promise.then((answer)=> {setFilm(answer.data)})
    },[])

    return (
        <>
            <SubHeader><Div><p>Selecione o horário</p></Div></SubHeader>
            
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