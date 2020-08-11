import React, { useState, useEffect } from 'react';
import './styles/App.css';
import FeatureCard from './components/FeatureCard'
import data from './assets/data.json'

function App() {

  const [features, setFeatures] = useState([]);

  useEffect(() => setFeatures(data));

  return (
    <div className = 'app'>
      <main>
        <h1 className = 'headerText'> Reliable, efficient delivery <span className = 'spanText'> Powered by Technology </span> </h1>
        <p className = 'paragraphText'> Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful </p>
        <div className = 'featureContainer'>
          {
            features.length === 0 ? ( <p> No features yet! </p> ) : (
              features.map((feature) => (
                <FeatureCard feature = {feature} key = {feature.id} />
              ))
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
