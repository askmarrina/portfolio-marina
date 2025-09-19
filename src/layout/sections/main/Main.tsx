
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import photo from '../../../assets/images/Photo.webp'
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                <div>
                    <span>Hello,</span>
                    <h2>I'm Daniella Adams</h2>
                    <p>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</p>
                    <Button type={'button'}>Download CV</Button>
                </div>
                    <Photo src={photo} alt=''/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: antiquewhite;
`

export const Photo = styled.img`
    width: 432px;
    height: 541px;
    object-fit: cover;
`



