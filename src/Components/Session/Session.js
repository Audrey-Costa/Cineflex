import Button from "../Button/Button"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom";

export default function Session(props){
    return (
        <Div>
            <p>{props.day} - {props.date}</p>
            <div>
                <Link style={{textDecoration: "none", color: "black"}} to={`/assentos/${props.id[0].id}`}><Button>{props.time[0].name}</Button></Link>
                <Link style={{textDecoration: "none", color: "black"}} to={`/assentos/${props.id[1].id}`}><Button>{props.time[1].name}</Button></Link>
            </div>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height:90px;
    padding: 10px 25px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;

    p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    }

    > div{
        width: 100%;
        margin: 10px 0;
        display: flex;

    }
    
`