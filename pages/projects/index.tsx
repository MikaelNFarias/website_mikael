import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as S from '../../styles/projectsStyles';

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Projects - Mikael</title>
      </Head>
      <S.ComingSoonSection>
        <S.Description>
          <S.Title>Coming Soon</S.Title>
          <S.Text>I'm working on something amazing. Stay tuned!</S.Text>
          <S.Button onClick={() => router.push('/')}>Go Back Home</S.Button>
        </S.Description>
      </S.ComingSoonSection>
    </>
  );
}
