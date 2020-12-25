import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const HeaderImage = styled.img`
 animation:${rotate360} infinite 20s linear;
 height: 40vmin;
`;

const Bio = styled.span`

`;

const HeaderLink = styled.a`
 color: #61dafb;
`;

const App: React.FC = () =>
{
  return (
    <Wrapper>
      <Header>
        <HeaderImage src={logo} alt="logo" />
        <Bio>
          <h2>Hello world!</h2>
        </Bio>
        <HeaderLink
          href="https://github.com/Herting"
          target="_blank"
          rel="noopener noreferrer" >
          Herting Github
        </HeaderLink>
      </Header>
    </Wrapper>
  );
}

export default App;
