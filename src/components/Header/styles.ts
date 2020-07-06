import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondaryText};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryText};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg:last-child {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.moonColor};
    fill: ${({ theme }) => theme.colors.moonColor};
    filter: drop-shadow(0px 0px 10px ${({ theme }) => theme.colors.moonColor});
  }

  svg:first-child {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.sunColor};
    fill: ${({ theme }) => theme.colors.sunColor};
    filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.colors.sunColor});
  }
`;
