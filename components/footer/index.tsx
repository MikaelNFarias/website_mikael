import React from 'react';
import Image from 'next/image';
import * as S from '../../styles/footerStyles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <S.FooterSection id="Contact">
      <S.Divider />
      <S.Info>
        <S.Contact>
          <S.Phone>
            <S.Title>Phone</S.Title>
            <S.Text>(53) 98419-5694</S.Text>
          </S.Phone>
          <S.Email>
            <S.Title>Email</S.Title>
            <S.Text>mikael.n.farias@gmail.com</S.Text>
          </S.Email>
          <S.Follow>
            <S.Title>Follow Me</S.Title>
            <S.Social>
              <S.Link href="https://www.linkedin.com/in/mikael-farias-521876164/">
                <S.LinkedInIcon />
              </S.Link>
              <S.Link href="https://github.com/MikaelNFarias">
                <S.GitHubIcon />
              </S.Link>
            </S.Social>
          </S.Follow>
        </S.Contact>
        <S.Copyright>&copy; 2024 Por Mikael Farias. Todos os Direitos Reservados.</S.Copyright>
      </S.Info>
    </S.FooterSection>
  );
}
