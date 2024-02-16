import styled from 'styled-components';

export const Container = styled.div`
  background-color: #131923;
  position: absolute;
  left: 0px;
  width: 300px;
  height:100vh;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 00px;
`;