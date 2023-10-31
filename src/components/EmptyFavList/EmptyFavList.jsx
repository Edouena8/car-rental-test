import img from '../../assets/images/nocontent.png';

export const EmptyFavList = () => {
  return (
    <div>
      <h2>Your car list is empty</h2>
      <p>You don't have any favorite cars right now.</p>
          <img src={img} alt="nocontent" />
          
          <EmptyFavList/>
    </div>
  );
};
