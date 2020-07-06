import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primaryText};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${({ theme }) => theme.colors.primaryText};
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: 0;
    ${(props) =>
      props.hasError &&
      css`
        border-color: ${({ theme }) => theme.colors.error};
      `}

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${({ theme }) => theme.colors.secondary};
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #f4ede8;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.secondary)};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 8px;
`;

export const Users = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const UserContainer = styled.div`
  margin-top: 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};

  button {
    background: ${({ theme }) => theme.colors.primary};
    text-align: left;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primaryText};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.secondaryText};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
`;

export const UserRepositories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0px 20px 20px 20px;

  a {
    margin-bottom: 5px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
    width: 100%;
    padding: 16px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primaryText};
      }

      p {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.secondaryText};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
`;
