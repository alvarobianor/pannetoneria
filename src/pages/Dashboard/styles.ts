import styled from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 40px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 05px;
    max-width: 700px;
    display: flex;
    select {
      flex: 1;
      height: 70px;
      padding: 24px;
      border: 0;
      border-radius: 10px 0 0 10px;
      background-color: #fff;
      border: 2px solid #fff;
      border-right: 0;
      font-family: Roboto, sans-serif;
      font-size: 100%;
      &::placeholder {
        color: #fff;
      }
      option {
        background-color: #fff;
        font-size: 20px;
        font-family: Roboto, sans-serif;
      }
    }
    button {
      width: 210px;
      height: 70px;
      background-color: #e07a16;
      border: 0;
      border-radius: 0 10px 10px 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.8s;
      &:hover {
        background-color: ${shade(0.25, '#E07A16')};
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    height: 150px;
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;
    &:hover {
      transform: translateX(35px);
    }
    & + a {
      margin-top: 20px;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    div {
      margin-left: 20px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 15px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 10px;
`;
