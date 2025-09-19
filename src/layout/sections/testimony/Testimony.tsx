
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slider} from '../../../components/slider/Slider';



export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper align={'center'} direction={'column'}>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #8a5e0a;
`
