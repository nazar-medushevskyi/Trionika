import './HomePage.css';
import { Header } from './Header/Header';
import { SectionOne } from './Section-1/SectionOne';
import { SecrionTwo } from './Section-2/SecrionTwo';
import { SectionThree } from './Section-3/SectionThree';

export const HomePage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SecrionTwo />
      <SectionThree />
    </>
  );
}