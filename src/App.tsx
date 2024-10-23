import { FC } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header, Main, Crypto, Whoismonke, MonkeInfo, Tokenomics, Wrapper, Roadmap, Game, Team, Faq, Footer } from './components';

gsap.registerPlugin(ScrollTrigger);

export const App: FC = () => {
  return (
    <Wrapper>
      <>
        <Header />
        <Main />
        <Crypto />
        <Whoismonke />
        <MonkeInfo />
        <Tokenomics />
        <Roadmap />
        <Game />
        <Team />
        <Faq />
        <Footer />
      </>
    </Wrapper>
  );
}

export default App;
