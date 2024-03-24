import styled from "styled-components";

const Titulo = styled.h2`
   color: #7b78e6;
   font-size: 27px;
   text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
   margin-bottom: 30px;
`

export default Titulo