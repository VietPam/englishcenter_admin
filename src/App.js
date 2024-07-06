import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppProvider from "./context/AppProvider";
function App() {
  return (
    <AppProvider>
      <Router>
        <>hello</>
      </Router>
    </AppProvider>

  );
}

export default App;
