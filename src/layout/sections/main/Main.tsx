
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import photo from '../../../assets/images/Photo.webp'
import { Container } from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <MainWrapper>
                        <span>Hello,</span>
                        <h2>I'm <span className={'heading'}>Daniella Adams</span></h2>
                        <p>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</p>
                        <Button primary type={'button'}>Download CV</Button>
                    </MainWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    
`

const MainWrapper = styled.div`
    max-width: 480px;
    width: 100%;
    text-align: left;
    
    span {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 28px;
        color: #000;
    }
    
    p {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.06em;
        text-transform: lowercase;
        color: ${Theme.colors.formColor};
        margin: 7px 0 35px;
    }
    
    span.heading {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 50px;
        color: ${Theme.colors.tertiaryBg}
    }
    
    h2 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 50px;
    }
   
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: '';
        display: inline-block;
        width: 621px;
        height: 692px;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        background-color: ${Theme.colors.secondaryBg};
        position: absolute;
        top: -75px;
        left: -10px;
        z-index: -1;
    }
`

export const Photo = styled.img`
    width: 432px;
    height: 541px;
    object-fit: cover;
`

