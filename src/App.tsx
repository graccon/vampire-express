
import Lottie from "lottie-react";
import txtLogo from './assets/icons/txt_vampire_express.svg';
import animationData from './assets/animations/bat_animation.json';
import './App.css';

function App() {

  return (
    <>
      <div id="spotlight-container">
        <div id="spotlight"></div>
        <div id="circle"></div>
        <Lottie animationData={animationData} 
          style={{ width: 180, height: 180, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} 
        />
      </div>
      <img src={txtLogo} className="logo" alt="Vampire Express" />
    </>
  );
}

export default App;