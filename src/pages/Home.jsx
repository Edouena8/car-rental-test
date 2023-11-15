import { HomeContent } from "components/HomeContent/HomeContent";
import { Title } from "components/Title/Title";

const Home = () => {
    return (
      <div>
            <Title text="Welcome to Your Car Rental Hub" />
            <HomeContent/>
      </div>
    );
}

export default Home;