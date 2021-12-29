import "./styles.css";

const name = "Khoa";
const currentYear = new Date().getFullYear();
export default function App() {
  return (
    <div className="App">
      <h1>Created by {name}</h1>
      <h1>Copyright {currentYear}</h1>
    </div>
  );
}
