import React from 'react';
import styled from 'styled-components';

const Component = styled.textarea`
  resize: none;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #bd93f9;

  background: ${props => props.background || '#44475a'};
  color: ${props => props.color || '#f8f8f2'};
  width: ${props => props.width || 'calc(70%)'};
  height: ${props => props.height || '150px'};
  font-size: ${props => props.fontSize || '1.1em'};

  :focus {
    border: 1px solid #50fa7b;
  }
`;

const TextArea = React.forwardRef(
  (
    { background, color, width, height, border, fontSize, placeholder },
    ref
  ) => (
    <Component
      ref={ref}
      background={background}
      color={color}
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      placeholder={placeholder}
    />
  )
);

export default TextArea;
