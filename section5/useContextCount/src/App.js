import { CountProvider } from "./CountProvider";
import { First } from "./First";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CountProvider>
        <First />
      </CountProvider>
    </div>
  );
}
