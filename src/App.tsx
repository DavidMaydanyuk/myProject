import Card, { CardVariant } from "./components/Card";

export default function App() {
  return (
    <div>
      <Card
        onClick={() => console.log("cklokrd")}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>clik</button>
      </Card>
    </div>
  );
}
