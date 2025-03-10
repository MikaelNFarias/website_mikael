import styled from "styled-components";
import Image from 'next/image';

export const AboutSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: #EAEAEA;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 54px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  line-height: 1.6;
  font-size: 24px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 1.0rem;

  width: 478px;
  height: 478px; /* Ajuste a altura para ser igual ao diâmetro */
  border-radius: 50%; /* Faz o contêiner redondo */
  overflow: hidden; /* Esconde qualquer parte da imagem que ultrapasse o círculo */
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem preenche o círculo sem distorção */
`;
