
import './App.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {increment,decrement} from './rtk/counter'

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div className="App">
       <h1>React Toolkit</h1>
      <h2>{count}</h2>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
