import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

export default function Ticket(props){
    return (
        <>
            <SubHeader><Div><p>Pedido feito com sucesso!</p></Div></SubHeader>
            <Info>
                <h1>Filme e Sessão</h1>
                <p>{props.ticket.title}</p>
                <p>{props.ticket.date} {props.ticket.time}</p>
            </Info>
            <Info>
                <h1>Ingressos</h1>
                {props.ticket.selected.map((element)=><p>Assento {props.ticket.id}</p>)}
            </Info>
            <Info>
                <h1>Comprador</h1>
                {props.ticket.selected.map((element)=>
                    <div>
                        <p>{props.ticket.nome}</p>
                        <p>{props.ticket.cpf}</p>
                    </div>)}
            </Info>
            <Link style={{textDecoration: "none", color: "black"}} to={`/`}><Div><Button><button>Voltar pra home</button></Button></Div></Link>
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
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
    button{
    width: 225px;
    height: 42px;
    border: none;
    background-color: #E8833A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
}
`
const Info = styled.div`
    width: 100%;
    height: 140px;
    background-color: #FFFFFF;
    margin: 30px 0;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`