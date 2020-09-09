import React from 'react';
import styled from 'styled-components';

const Component = styled.button`
  color: #282a36;
  background: #50fa7b;
  border: 0;
  border-radius: 5px;
  outline: none;
  width: auto;
  padding: 5px 20px;

  :focus {
    outline: none;
  }
`;

function Button({ children, onClick }) {
  return <Component onClick={onClick}>{children}</Component>;
}

export default Button;
