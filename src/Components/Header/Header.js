import styled from "styled-components"

export default function Header(){
    return (
        <Div>
            <h1>CINEFLEX</h1>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 70px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A;
    }

`