import Button from "./ButtonComponent";
import { FcFilledFilter } from "react-icons/fc";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Primart btn");
  };

  return (
    <>
      <h1>Button Components</h1>

      <Button primary onClick={handleClick} className="mb-5">
        <FcFilledFilter />
        Primary
      </Button>
      <Button secondary rounded>
        Secondary
      </Button>
      <Button warning>warning</Button>
      <Button success outline>
        Success
      </Button>
      <Button danger>Danger</Button>
    </>
  );
};

export default ButtonPage;
