import styled from "styled-components"
import SubHeader from "../SubHeader/SubHeader"

export default function Seats(){
    return (
        <>
            <SubHeader><Div><p>Selecione o(s) assento(s)</p></Div></SubHeader>
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