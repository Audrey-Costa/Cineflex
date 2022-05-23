import styled from "styled-components"

export default function Input(props){
    return (
        <Div>
            <label htmlFor={props.id}>{props.text}</label>
            <input type="text" id={props.id} placeholder={props.placeholder} pattern={props.pattern} onInvalid={props.onInvalid} required/>
        </Div>
    )
}

const Div = styled.div`
    width: 350px;
    margin: 20px;
    input{
        width: 320px;
        height: 50px;
    }
`