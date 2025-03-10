import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  background-color: #EAEAEA;
`;

export const HeaderContainer = styled.div`
  background-color: #EAEAEA;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 30px;
  color: #636363;
  font-size: 32px;

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
    font-size: 24px;
  }
`;

export const Name = styled.h1`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  color: rgb(73, 73, 73);

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Function = styled.h2`
  color: #919191;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const LinkDiv = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const StyledLink = styled.a`
  font-family: "Roboto", sans-serif;
  color: #636363;
  text-decoration: none;
  margin: 0 15px;
  font-size: 32px;

  &:hover {
    color: rgb(136, 140, 179);
  }

  &::after {
    content: '|';
    margin-left: 15px;
  }

  &:last-child::after {
    content: '';
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 5px 0;
  }
`;
