import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"
import {useState, useEffect} from "react"
import axios from "axios"
import Movie from "../Movie/Movie"

export default function Movies(){
    const [items, setItems] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {
            setItems(response.data)
        })
    },[])

    return (
        <>
            <SubHeader><Div><p>Selecione o filme</p></Div></SubHeader>
            <Container>
                {items.map(item => <Movie key = {item.id} src={item.posterURL} idFilm={item.id}/>)}
            </Container>
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

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`