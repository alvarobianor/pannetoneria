import styled from 'styled-components';

import { shade } from 'polished';

export const Repository = styled.div`
  margin-top: 30px;
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
    &:hover {
      background-color: ${shade(0.05, '#fff')};
      transition: 0.3s;
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
