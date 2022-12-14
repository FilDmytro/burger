import SingleController from "./SingleController";
import styled from "styled-components";

const Controls = ({ ingredients, quantityOfIngredient }) => {
  return (
    <ControlsStyled>
      {ingredients.map((ingredient) => (
        <SingleController
          key={ingredient}
          ingredient={ingredient}
          quantityOfIngredient={quantityOfIngredient[ingredient]}
        ></SingleController>
      ))}
    </ControlsStyled>
  );
};

const ControlsStyled = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export default Controls;
