import './SectionSeven.scss';
import jsonDate from '../../../../API/Rus.json';

export const SectionSeven = () => {
  return (
    <h1>{jsonDate['section-7']['title']}</h1>
  )
}