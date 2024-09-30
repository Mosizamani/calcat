import './App.css';
import Calculator from '/Calculator.jsx';

function App() {
    // const [data, setData] = useState([])
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    
    // useEffect(() => {
    //   fetch('https://api.thecatapi.com/v1/images/search')
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data')
    //       }
    //       return response.json()
    //     })
    //     .then((data) => {
    //       console.log("API Response:", data)
    //       setData(data)
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error)
    //     })
    // }, [])
    
    
  return (
    <>
      <div>
        <h1>Hello, user!</h1>
        <h2>Once you click on the result button, the App give you a gift!</h2>
      </div>
      <Calculator />
    </>
  );
}

export default App;
