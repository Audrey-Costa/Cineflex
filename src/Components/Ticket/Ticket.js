import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"

export default function Ticket(){
    return (
        <>
            <SubHeader><Div><p>Pedido feito com sucesso!</p></Div></SubHeader>
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
`