import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'}; //se eu passar o atributo cor, retorna a cor que eu passar, se não, retorna a cor #000
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`