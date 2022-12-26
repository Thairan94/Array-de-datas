
import './App.css';
import {Form} from './components/Form';
import { List } from './components/List';


function App() {
  return (
    <div className="App">
     <Form size="small">
        <span>Verificar datas</span>
     </Form>
     <List/>
    </div>
  );
}

export default App;
