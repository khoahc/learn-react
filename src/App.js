import "./styles.css";

const date = new Date();
let currentHour = date.getHours();
let greeting;
const customStyle = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}

export default function App() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}
