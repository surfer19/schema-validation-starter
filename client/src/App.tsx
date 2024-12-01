import { TrpcProvider } from "./services/trpc.provider";
import { DogBreedsPage } from "./features/dogs/pages/DogBreedsPage";
import "./App.css";

function App() {
  return (
    <TrpcProvider>
      <DogBreedsPage />
    </TrpcProvider>
  );
}

export default App;
