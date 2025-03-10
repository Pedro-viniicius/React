import IconesHeader from '../componentes/IconesHeader';
import Logo from '../componentes/Logo';
import OpcoesHeader from '../componentes/OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header `
        background-color: #fff;
        display: flex;
        justify-content: center;
`
function Header(){
    return(
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}

export default Header;