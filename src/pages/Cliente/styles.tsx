import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  
    button {
      
    }
  
  }
`;

export const Button = styled.button`
  background: #00BEC5;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;
  align="right";

  & :hover {
    background: ${darken(0.06, '#00BEC5')};
  }
`
export const ButtonHome = styled.button`
  background: #1c016b;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;
  align="right";

  & :hover {
    background: ${darken(0.06, '#1c016b')};
  }
`