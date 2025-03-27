import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router basename="/The-dev-store">
      <NavBar />
    </Router>
  );
};

export default App;