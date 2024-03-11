import styled from "styled-components";
import search from './search.png';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #c98cf1;
    background: transparent;
    box-sizing: border-box;
    width: 456px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;

        /* Estilos para o placeholder */
        &::placeholder {
        color: rgba(217, 217, 217, 1);
    }
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;


const CampoTexto = () => {
    return(
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" />
            <IconeLupa src={search} alt="Icone Da Lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto