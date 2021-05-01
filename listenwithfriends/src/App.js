import GlobalState from './GlobalStates/GlobalState';
import Router from './Routes/Router';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
