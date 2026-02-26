import React from 'react';
import SetupHeader from '../components/AssitantHeader';
import ReadyToGoSection from '../components/ReadyTogo';
import TrainAssistantSection from '../components/TrainYourAssistant';

function SetUp() {
  return (
    <div>
      <SetupHeader/>
      <ReadyToGoSection/>
      <TrainAssistantSection/>
    </div>
  );
}

export default SetUp;
