import styled from "styled-components"

export default function Footer(props){
    return (
        <Div>
            {props.children}
        </Div>
    )
} 

const Div = styled.div`
    width: 100%;
    height: 120px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0px;
    left: 0px;
    img{
        height: 120px;
        margin-right: 30px;
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`