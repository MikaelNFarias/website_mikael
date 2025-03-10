import styled from "styled-components";
import Image from 'next/image';

export const AboutSection = styled.section`
  display: flex;
  width: 100%;

  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 146px;
  margin-bottom: 90px;
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

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
