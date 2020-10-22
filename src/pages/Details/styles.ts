import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.5s;
    &:hover {
      color: darkgoldenrod;
    }
  }
  svg {
    margin-right: 5px;
  }
`;

export const DetailsInfo = styled.section`
  margin-top: 50px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    strong {
      margin-left: 12px;
      font-size: 36px;
      color: #3d3d4d;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 30px;
        color: #3a3a4b;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const DetailsAbout = styled.div`
  margin-top: 80px;

  div {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    strong {
      font-size: 25px;
      color: #3d3d4d;
    }
    p {
      margin-top: 20px;
      color: #514a63;
    }
  }
`;
