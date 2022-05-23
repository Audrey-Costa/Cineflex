import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Seat from "../Seat/Seat"
import Input from "../Input/Input";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

export default function Seats(){
    const { idSession } = useParams();
    const [session, setSession] = useState({})
    const [ready, setReady] = useState(false)
    const [selected, setSelected] = useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/87/seats`)
        promise.then((answer) => {
            setSession(answer.data)
            setReady(true)})
    }, [])

    function select(element, index){
        if(selected.find((item)=>item===index)){
            setSelected(selected.filter((item)=>item !== index))
        }else{
            if(element){
                setSelected([...selected, index]);
            }
        }
        console.log(selected)
    }

    return (
        <>
            <SubHeader>
                <Div><p>Selecione o(s) assento(s)</p></Div>
            </SubHeader>
            <Room>
                {ready ? session.seats.map((element, index)=> 
                    <Seat 
                        key={element.id} 
                        name={element.name} 
                        available={element.isAvailable}
                        color={element.isAvailable ? (selected.find((element) => element === index) ? "#8DD7CF" : "#C3CFD9") : "#FBE192"}
                        >
                            <p onClick={()=>select(element.isAvailable, index)}>{element.name}</p>
                    </Seat>) : "batata"}
            </Room>
            <Legend>
                <div>
                    <Seat color={"#8DD7CF"}/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Seat color={"#C3CFD9"}/>
                    <p>Disponível</p>
                </div>
                <div>
                    <Seat color={"#FBE192"}/>
                    <p>Indisponível</p>
                </div>
            </Legend>
            <Form>
                {selected.length === 0 ?
                <>
                     <Input id={"nome"} text={"Nome do comprador:"} placeholder={"Digite seu nome..."} pattern={"[A-Za-z' ']+"} />
                        <Input id={"CPF"} text={"CPF do comprador:"} placeholder={"Digite seu CPF..."}  pattern={"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"}  required/>
                </> 
                : selected.map((element, index)=>
                    <div key={index}>
                        <Input id={"nome"} text={"Nome do comprador:"} placeholder={"Digite seu nome..."} pattern={"[A-Za-z' ']+"} />
                        <Input id={"CPF"} text={"CPF do comprador:"} placeholder={"Digite seu CPF..."}  pattern={"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"}  required/>
                    </div>
                    )}
                <Button><button type={"submit"} >Reservar assento(s)</button></Button>
            </Form>
            {ready ? <Footer>  
                <img src={session.movie.posterURL} alt="Filme"/> 
                <div>
                    <h1>{session.movie.title}</h1>
                    <p>{session.day.weekday} - {session.name}</p>
                </div>
            </Footer> : ""}
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

const Room = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div{
        margin: 5px;
    }
    p{  
        padding: 5px;
    }
`

const Legend = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div > div{
        margin: 20px 40px;
        background-color: ${props => props.backgroundcolor};
    }
`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        width: 70%;
        height: 70px;
        margin-top: 20px;
    }
    div button{
        width: 225px;
        border: none;
        background-color: #E8833A;;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`