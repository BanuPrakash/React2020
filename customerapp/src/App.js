import './App.css';
import CustomerList from './components/CustomerList';
import LoadUser from './components/LoadUser';

function App() {
  return (
    <div className="App">
           <h1> Customer Application </h1>
           <LoadUser />
           <CustomerList />
    </div>
  );
}

export default App;
