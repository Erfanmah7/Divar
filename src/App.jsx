import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layouts/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient(defaultOptions);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router />
          <Toaster />
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
