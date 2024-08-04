import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { defaultOptions } from "./configs/reactQuery";

function App() {
  const queryClient = new QueryClient(defaultOptions);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
