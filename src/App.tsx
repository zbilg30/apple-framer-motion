import { Container } from "./components/container";
import { Header } from "./components/header";
import "./styles.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>Hero</Container>
        </div>
        <div>
          <Container>usps</Container>
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
      </main>
    </>
  );
};

export default App;
