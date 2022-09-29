import './App.css';

function App() {
  let currentTime = new Date().toLocaleTimeString();
  return (
   <div>Hello world!
   <h1>Current time {currentTime}</h1>
       <button className='btn btn-success'>Hi</button>
   </div>
  );
}

export default App;
