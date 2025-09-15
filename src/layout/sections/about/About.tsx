
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from '../../../assets/images/Photo.webp';
import {Button} from "../../../components/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <PhotoAbout src={photo}/>
                <div>
                    <h2>I am a creative Graphic & UI Designer</h2>
                    <p>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button>Download CV</Button>
                    <Button>View Portfolio</Button>
                    <Icons>
                        <Icon iconId={'photoshop'}/>
                        <Icon iconId={'illustrator'}/>
                        <Icon iconId={'figma'}/>
                    </Icons>

                </div>


            </FlexWrapper>

        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 50vh;
    background-color: #fcb7d4;
`
const PhotoAbout = styled.img`
    width: 361px;
    height: 452px;
    object-fit: cover;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`



