import styled from "styled-components"

export default function Seat(props){
    return (
        <Div color={props.color}>
            {props.children}
        </Div>
    )
}

const Div = styled.div`
    width: 26px;
    height: 25px;
    border: 1px solid #808F9D;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color}
`