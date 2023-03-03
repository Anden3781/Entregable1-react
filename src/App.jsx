import React, { useState } from 'react';
import phrase from './assets/data.json';
import backgrounds from './assets/img.json';
import Card from './components/Card/Card';
import './index.css';
import { getRandomNumber as random } from './utils/getRandomNumber';
import Button from './components/Button/Button';
import Autor from './components/Autor/Autor';

const App = () => {
  const [indexGalaxy, setIndexGalaxy] = useState(random(0, phrase.length - 1));
  const [backgroundIndex, setBackgroundIndex] = useState(
    random(0, backgrounds.length - 1),
  );

  const changeGalaxy = () => {
    /* Background random image */
    let newBackgroundIndex = random(0, backgrounds.length - 1);
    while (newBackgroundIndex === backgroundIndex) {
      newBackgroundIndex = random(0, backgrounds.length - 1);
    }
    setBackgroundIndex(newBackgroundIndex);

    const newIndex = random(0, phrase.length - 1);

    setIndexGalaxy(newIndex);
  };

  /* Background images */
  const backgroundImg = {
    backgroundImage: `url(${backgrounds[backgroundIndex].img})`,
  };
  return (
    <div className="w-full h-screen" style={backgroundImg}>
      <div className="App flex flex-col justify-center items-center p-10 text-white text-center border-neutral-300 border-2">
        <h1>INFOGALAX</h1>
        <Card galaxy={phrase[indexGalaxy]} />
        <Button random={changeGalaxy} />
        <Autor galaxy={phrase[indexGalaxy]} />
      </div>
    </div>
  );
};

export default App;
