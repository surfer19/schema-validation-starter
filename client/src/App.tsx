import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DogBreedsPage } from "./features/dogs/pages/DogBreedsPage";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DogBreedsPage />
    </QueryClientProvider>
  );
}

export default App;
