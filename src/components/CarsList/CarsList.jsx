import { CarItem } from '../CarItem/CarItem';
import { List } from './CarsList.styled';

export const CarsList = ({ data }) => {
  return (
    <List>
      {data.map(item => {
        return <CarItem car={item} key={item.id} />;
      })}
    </List>
  );
};
