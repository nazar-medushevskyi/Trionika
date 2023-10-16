import './HomePage.css';
import { Header } from './Header/Header';
import { SectionOne } from './Section-1/SectionOne';
import { SecrionTwo } from './Section-2/SecrionTwo';

export const HomePage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SecrionTwo />
    </>
  );
}