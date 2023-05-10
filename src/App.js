import React, { useState } from 'react';
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import { CustomSliderButton } from './CustomSliderButton';

const content = [
  {
    title: "Heaven",
    description:
      "During my first year in China and my first visit to Beijing and the Temple of Heaven.",
    button: "",
    image: "https://64.media.tumblr.com/tumblr_lspfzvu7F01qmnyloo1_1280.jpg",
    userProfile: ""
  },
  {
    title: "Solitude",
    description:
      "In the sleepy little town of Jinshitan, a place I called home for 3 years.",
    button: "",
    image: "https://64.media.tumblr.com/tumblr_lqob8ojJEk1qmnyloo1_1280.jpg",
    userProfile: ""
  },
  {
    title: "Crossing",
    description:
      "In the heart of Beijing where I was dumbfounded by the scale of the city.",
    button: "",
    image: "https://64.media.tumblr.com/tumblr_lspf2o9grp1qmnyloo3_1280.jpg",
    userProfile: ""
  }
];

const App = () => {
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(prevShowSlider => !prevShowSlider);
  };

  const handleSliderClick = () => {
    toggleSlider();
    const container = document.querySelector(".slider-container");
    if (showSlider) {
      container.classList.add("hide-elements");
    } else {
      container.classList.remove("hide-elements");
    }
  };

  const handleSlideChange = () => {
    const container = document.querySelector(".slider-container");
    container.classList.remove("hide-elements");
  };

  return (
    <div>
      <div className="wrapper">
        <h1 className="title kaivan">
          <span><p>Kaivan Photography</p></span>
        </h1>
      </div>
      <div className="slider-container">
        <Slider
          className="slider-wrapper"
          onSlideChange={handleSlideChange}
          previousButton={(onClick) => <CustomSliderButton direction="previous" onClick={onClick} />}
          nextButton={(onClick) => <CustomSliderButton direction="next" onClick={onClick} />}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={handleSliderClick}>Hide description</button>
              </div>
              <section>
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQGQLl_shrUwYA/profile-displayphoto-shrink_800_800/0/1679407660752?e=1689206400&v=beta&t=p8RfP49DQ7i3HpmNyFGTqWLfokvDcAsMeKyyPzGBZ8U"
                  alt={item.user}
                />
                <span>
                  Photo by <strong>Kaivan Chew</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));

export default App;