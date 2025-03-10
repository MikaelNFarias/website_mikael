import React from 'react';
import * as S from '../../styles/aboutStyles';

export default function About() {
  return (
    <S.AboutSection id="About">
      <S.ImageContainer>
        <S.Img src="/profile.jpg" alt="Imagem de Perfil" width={478} height={478} />
      </S.ImageContainer>

      <S.Description>
        <S.Title>Welcome!</S.Title>
        <S.Text>
          My name is Mikael and I am currently studying Automation Engineering at the Federal University of Rio Grande.
          I have been working since 2023 with Full Stack Development, in which I use technologies such as NodeJS, React,
          Next, Typescript and so on. Feel free to explore the site and learn more about my experiences.
        </S.Text>
      </S.Description>
    </S.AboutSection>
  );
}
