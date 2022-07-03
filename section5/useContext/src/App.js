import { TextProvider } from "./TextProvider";
import { First } from "./First";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TextProvider>
        <First />
      </TextProvider>
    </div>
  );
}
