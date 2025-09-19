
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledWork>
    );
};

const StyledWork = styled.div`
   flex: 0 1 33.333%
`

const Image = styled.img`
    width: 330px;
    height: 330px;
    object-fit: cover;
`
const Title = styled.h3`

`

const Text = styled.span`

`