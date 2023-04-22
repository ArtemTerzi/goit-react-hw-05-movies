import styled from '@emotion/styled';

export const Input = styled.input`
  padding: 4px;
  width: 400px;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    background-color: coral;
    color: white;
  }
`;

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 16px;

  &:hover,
  &:focus {
    color: white;
    background-color: coral;
  }
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 8px;
`;
