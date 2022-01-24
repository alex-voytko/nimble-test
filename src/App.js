import Container from "./components/Container";
import TrackerTitle from "./components/TrackerTitle";
import TrackerInput from "./components/TrackerInput";
import TrackerList from "./components/TrackerList";

export default function App() {
  return (
    <Container>
      <TrackerTitle />
      <TrackerInput />
      <TrackerList />
    </Container>
  );
}
