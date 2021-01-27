import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>DontQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <div>
                <input
                  onChange={function (e) {
                    setName(e.target.value);
                  }}
                  placeholder="Qual o seu nome?"
                />
              </div>
              <br />

              <div>
                <button type="submit" disabled={name.length === 0}>
                &ensp; Jogar &ensp;
                  {name}
                </button>
              </div>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React Next.js fez:</p>

            <p><a href="https://aluraquiz.alnun.vercel.app">https://aluraquiz.alnun.vercel.app</a></p>
            <p><a href="https://aluraquiz-copadomundo.antonionarcilio.vercel.app">https://aluraquiz-copadomundo.antonionarcilio.vercel.app</a></p>
            <p><a href="https://css-quiz.higorpo.vercel.app">https://css-quiz.higorpo.vercel.app</a></p>
            <p><a href="https://imersao-alura-v2.jvitormf.vercel.app">https://imersao-alura-v2.jvitormf.vercel.app</a></p>
            <p><a href="https://democra-quiz.lfrigodesouza.vercel.app/">https://democra-quiz.lfrigodesouza.vercel.app</a></p>
            <p><a href="https://dragon-ball-quiz.pablotdv.vercel.app">https://dragon-ball-quiz.pablotdv.vercel.app</a></p>
            <p><a href="https://scrumquiz.robsonamendonca.vercel.app">https://scrumquiz.robsonamendonca.vercel.app</a></p>
            <p><a href="https://fortnitequiz.vercel.app">https://fortnitequiz.vercel.app</a></p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gustavouchoa" />
    </QuizBackground>
  );
}
