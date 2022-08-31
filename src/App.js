import { useState } from "react";
import styled from "styled-components";
import Face1 from "./img/face-1.png";
import Face2 from "./img/face-2.png";
import Face3 from "./img/face-3.png";
import Face4 from "./img/face-4.png";
import Face5 from "./img/face-5.png";
import Face6 from "./img/face-6.png";


const Button = styled.button `
  margin: 5% 0 0 0;
  background-color: #008dff;
  width: 5%;
  height: 5%;
  border-radius: 10px;
  border: none;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    background-color: #0068ff;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    cursor: pointer;
  }
  @media(max-width: 800px) {

      width: 20%;
  }

`

const Img = styled.img`
  border-radius: 10%;
  margin: 20% 0 0 0;
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;

@media(max-width: 800px) {
  
    margin: 50% 0 0 0;
}
`

const Div = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: #0068ff;
  height: 47vw;

  h1 {
    color: #008dff;
    margin: 5% 0 0 0;
    text-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  img {
    border-radius: 10%;
    margin: 20% 0 0 0;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

    
  @media(max-width: 800px) {
    
    height: 98vh;


    img{
      margin: 50% 0 0 0;
    }
 }
`;

function App() {
  const facesDice = [1, 2, 3, 4, 5, 6];

  const [face, setFace] = useState(1);

  const faceDice = facesDice
    .sort(() => Math.random() - 0.5)
    .map((face) => face);

    const renderFace = (param) => {
      switch (param) {
        case 1:
          return <Img 
          alt="dice"
          src={Face1} />;
        case 2:
          return <Img 
          alt="dice"
          src={Face2} />;
        case 3:
          return <Img 
          alt="dice"
          src={Face3} />;
        case 4:
          return <Img 
          alt="dice"
          src={Face4} />;
        case 5:
          return <Img 
          alt="dice"
          src={Face5} />;
        case 6:
          return <Img 
          alt="dice"
          src={Face6} />;
        default:
          return <Img 
          alt="dice"
          src={Face1} />;
      }
    };

  return (
    <Div className="App">
      <h1>Lance o 🎲</h1>

      <div>{renderFace(face[0])}</div>

      <Button
        onClick={() => {
          setFace(faceDice);
        }}
      >
        Lançar
      </Button>
    </Div>
  );
}

export default App;
