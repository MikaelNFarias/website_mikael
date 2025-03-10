import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  background-color: #EAEAEA;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 30px;
  color: #636363;
  font-size: 32px;
`;


export const Name = styled.h1`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  color:rgb(73, 73, 73);
`;

export const Function = styled.h2`
  color: #919191;
  font-size: 24px;
  font-weight: 400;
`;

export const LinkDiv = styled.nav`

`;

export const StyledLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-type: regular;
  color: #636363;
  text-decoration: none;
  margin: 0px 15px;
  font-size: 32px;

  &:hover {
    color: rgb(136, 140, 179); 
  }

    &::after {
    content: '|';
    margin-left: 15px;
  }

  &:last-child::after {
    content: ''; /* Remove o traço após o último link */
  }
`;

