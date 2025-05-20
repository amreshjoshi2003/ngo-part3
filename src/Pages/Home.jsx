import React from 'react';
import Slider from './Slider';
import HorizontalSlider from './HorizontalSlider';
import LatestActivity from './Latest Activity';
import AboutUsPreview from './AboutUsPreview';
import PresidentMessage from './PresidentMessage';
import Objectives from './Objectives';





const Home = () => {
  return (
    <div>

      <Slider/>
      <HorizontalSlider/>
      <LatestActivity />
      <AboutUsPreview/>
      <PresidentMessage/>
      <Objectives/>

    </div>
  );
};

export default Home;
