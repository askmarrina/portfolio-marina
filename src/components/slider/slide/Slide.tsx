
import styled from "styled-components";
import {Icon} from '../../icon/Icon.tsx'
import rating from '../../../assets/images/rating.png'

type SlidePropsType = {
    src: string;
    name: string;
    customer: string;
    text: string;
}

export const Slide = (props: SlidePropsType) => {
    return (
        <StyledSlide>
            <Icon iconId={'quote'}/>
            <Image src={props.src}/>
            <Name>{props.name}</Name>
            <Customer>{props.customer}</Customer>
            <Text>{props.text}</Text>
            <Rating src={rating}/>
        </StyledSlide>
    );
};

const StyledSlide = styled.div`

`
const Image = styled.img`
    width: 104px;
    height: 104px;
`

const Name = styled.h4`

`

const Customer = styled.h5`
    color: red;
`
const Text = styled.p`

`
const Rating = styled.img`
    width: 154px;
    height: 26px;
    object-fit: cover;
`