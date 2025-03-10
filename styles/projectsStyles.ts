import styled from "styled-components";

export const ComingSoonSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  background-color: #EAEAEA;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 54px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  line-height: 1.6;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;