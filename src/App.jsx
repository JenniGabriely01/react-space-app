import { styled } from "styled-components"
import EstilosGlbais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 95%;
`

const PrincipalContainer = styled.main`
  display: flex;
  gap: 30px;
`

function App() {

  return (
    <FundoGradient>
      <EstilosGlbais />
      <AppContainer>
        < Cabecalho />
        <PrincipalContainer>
          <BarraLateral />
          <Banner />
        </PrincipalContainer>
      </AppContainer>
    </FundoGradient>
  )
}

export default App
