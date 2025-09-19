
import styled from 'styled-components';
import {Logo} from "../../components/Logo.tsx";
import {Menu} from "../../components/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #FB3F5C;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 30px;
`