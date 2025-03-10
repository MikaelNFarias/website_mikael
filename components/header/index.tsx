import React from 'react';
import * as S from '../../styles/headerStyles';

export default function Header() {
  return (
    <S.HeaderSection id="Header">
      <S.HeaderContainer>
        <S.Presentation>
          <S.Name>Mikael Farias</S.Name>
          <S.Function>Full Stack Developer</S.Function>
        </S.Presentation>

        <S.LinkDiv>
          <S.StyledLink href="/curriculum">Curriculum</S.StyledLink>
          <S.StyledLink href="/projects">Projects</S.StyledLink>
          <S.StyledLink href="/#Contact">Contact</S.StyledLink>
        </S.LinkDiv>
      </S.HeaderContainer>
    </S.HeaderSection>
  );
}
