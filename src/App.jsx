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
        <h2>Once you click on the result button, the App give you a gift!</h2>
      </div>
      {/* <CatImage /> */}
      <CatImageReducer reload={reloadCatImage} />
      <Calculator onEqualClick={onEqualClick } />
    </>
  );
}

export default App
