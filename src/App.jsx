import './App.css';
import Calculator from './Calculator.jsx';
import CatImage from './catImage.jsx';
import CatImageReducer from './CatImageReducer.jsx'
import { useState } from 'react'

function App() {

  const [reloadCatImage, setReloadCatImage] = useState(0)

  const onEqualClick = () => {
    setReloadCatImage(prev => prev + 1)
  }
    
  return (
    <>
      <div>
        <h1>Hello, user!</h1>
        <h2>Once you click on the result button, the App gives you a gift!</h2>
      </div>
      
      {/* Container for both the calculator and cat image */}
      <div className="left-container">
        <div className="calculator">
        <div className="cat-image">
          <CatImageReducer reload={reloadCatImage} />
        </div>
          <Calculator onEqualClick={onEqualClick} />
        </div>
      </div>
    </>
  );
}

export default App
