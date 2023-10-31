import { Button } from "./LearnMoreBtn.styled";

export const LearnMoreBtn = ({toggleModal}) => {
    return <Button onClick={toggleModal}>Learn more</Button>;
}