import styled from "styled-components";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Divider = styled.div`
  width: 95%;
  height: 1px;
  background-color: #000;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 102px;
`;

export const Info = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
  margin-bottom: 45px;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000;  /* Cor do texto do link */
  margin-right: 1rem; /* Espaçamento à direita */
  text-decoration: none;  /* Remover o sublinhado do link */

  &:hover {
    color: #1DA1F2;  /* Cor do hover para o link */
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  font-size: 2.5rem; /* Aumentar o tamanho do ícone */
  margin-right: 0.5rem;  /* Opcional: espaço entre o ícone e o texto */
`;

export const GitHubIcon = styled(FaGithub)`
  font-size: 2.5rem; /* Aumentar o tamanho do ícone */
  margin-right: 0.5rem;  /* Opcional: espaço entre o ícone e o texto */
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #EAEAEA;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #000;
`;

export const Text = styled.p`
  font-size: 24px;
  color: #919191;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.0rem;
`;

export const Copyright = styled.span`
  font-size: 20px; 
  color: #696969;
  text-align: center; 
  display: block; 
  margin-top: 20px; 
`;