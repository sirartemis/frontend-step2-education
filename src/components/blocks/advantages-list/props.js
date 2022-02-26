import Advantage from 'blocks/advantage/Advantage';

const {
  advantages = {
    comfort: new Advantage({ 
      icon: 'insert_emoticon', 
      rich: 'Комфорт', 
      content: 'Шумоподавляющие стены'  
    }),
    convenience: new Advantage({
      icon: 'location_city',
      rich: 'Удобство',
      content: 'Окно в каждой из спален',
    }),
  },
  advantagesElements = {},
} = {};
Object.entries(advantages).map(([name, advantage]) => advantagesElements[name] = advantage.element);

const defaultProps = { items: advantagesElements, advantages };

export default defaultProps;
