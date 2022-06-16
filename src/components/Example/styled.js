import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding-top: 80px;
    height: 600px;
    background-color: ${theme.colors.white2};

    h2 {
      display: block;
      text-align: center;
      margin-top: 250px;
    }
  `}
`;
