import "./App.css";
import { AppRouter } from "./routes";
import { WithRouter } from "./providers";

function App() {
  return (
    <WithRouter>
      <AppRouter />
    </WithRouter>
  );
}

export default App;
