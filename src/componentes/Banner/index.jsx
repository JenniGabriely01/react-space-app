import styled from "styled-components";
import imgBanner from './banner.png'

const ImageBanner = styled.figure`
   background-image: url(${imgBanner});
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TituloBanner = styled.h1 `
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = () => {
    return (
        <ImageBanner src={imgBanner} alt="" >
            <TituloBanner>
            A galeria mais completa de fotos do espaço!
            </TituloBanner>
        </ImageBanner>
    )
}

export default Banner