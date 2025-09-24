
import styled from 'styled-components';
import {Logo} from "../../components/Logo.tsx";
import {Menu} from "../../components/Menu.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Heading>Front-end Developer</Heading>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <Menu/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.tertiaryBg};
    
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-bottom: 100px;
`

const Heading = styled.h1`
    display: none;
`