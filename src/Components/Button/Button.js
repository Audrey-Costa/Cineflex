import styled from "styled-components"

export default function Button(props){
    return (
        <Div>
            {props.children}
        </Div>
    )
}

const Div = styled.div`
    width: 85px;
    height: 45px;
    background-color: #E8833A;
    margin-right: 10px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`