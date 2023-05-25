import  './App.css';
import Card from './components/Card';
import classes from "./App.Module.css"

function App() {
  return (
   <div className={classes['Card']}>
    <Card></Card>
    </div>
  );
}

export default App;
