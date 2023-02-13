import { RouterProvider } from 'react-router-dom';
import { router } from '../router/AppRouter';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Modal } from '../components/Modal';

function App() {

  const client = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </QueryClientProvider>

      <Modal />
    </div>
  );
}

export default App;
