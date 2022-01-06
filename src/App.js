import "./styles.css";
import { add, multiply, subtract, divide } from "./calculator";

export default function App() {
  return (
    <div>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(3, 2)}</li>
        <li>{subtract(3, 2)}</li>
        <li>{divide(6, 4)}</li>
      </ul>
    </div>
  );
}
