import './App.css';
import Calculator from './Calculator.jsx';
import CatImage from './catImage.jsx';
import CatImageReducer from './CatImageReducer.jsx'

function App() {
 
    
  return (
    <>
      <div>
        <h1>Hello, user!</h1>
        <h2>Once you click on the result button, the App give you a gift!</h2>
      </div>
      {/* <CatImage /> */}
      <CatImageReducer />
      <Calculator />
    </>
  );
}

export default App;
