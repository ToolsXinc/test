import './App.css';
import BrokersAppBar from './components/nav-bar/navbar';
import BrokerSideBar from './components/sidebar/sidebar';
import Home from './view/Home/Home';
const  App = () => {

  return (
    <div>
        <BrokersAppBar />
        <Home />
        <BrokerSideBar />
    </div>
  );
}

export default App;
