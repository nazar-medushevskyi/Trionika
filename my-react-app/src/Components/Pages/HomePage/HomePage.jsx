import './HomePage.scss';
import { Header } from './Header/Header';
import { SectionOne } from './Section-1/SectionOne';
import { SecrionTwo } from './Section-2/SecrionTwo';
import { SectionThree } from './Section-3/SectionThree';
import { SectionFour } from './Section-4/SectionFour';
import { SectionFive } from './Section-5/SectionFive';
import { SectionSix } from './Section-6/SectionSix';
import { SectionSeven } from './Section-7/SectionSeven';
import { SectionEight } from './Section-8/SectionEight';
import { SectionNine } from './Section-9/SectionNine';
import { SectionTen } from './Section-10/SectionTen';

export const HomePage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SecrionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </>
  );
}