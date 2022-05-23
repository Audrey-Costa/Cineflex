import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Movie({src, idFilm}){
    return (
        <Div>
            <Link to={`/sessoes/${idFilm}`}><img src={src} alt="filme" /></Link>
        </Div>
    )
}

const Div = styled.div`
    width: 145px;
    height: 210px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    img{
        width: 130px;
        height: 200px;
    }
`