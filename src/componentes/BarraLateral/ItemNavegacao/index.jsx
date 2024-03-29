import styled from "styled-components";

const ItemListaEstilizada = styled.li`
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    /* a cor vai variar se o li estiver ativo ou não */
    color: ${ props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    /* a fonte vai variar se o li estiver ativo ou não */
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => (
    <ItemListaEstilizada $ativo={ativo}>
        {/* operador ternário - se o ícone for verdadeiro, ele será ativo, caso contrário, será inativo */}
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
    </ItemListaEstilizada>
);

export default ItemNavegacao;
