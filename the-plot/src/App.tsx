import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "./components/root/RootLayout";
import HomePage from "./pages/home/HomePage";
import DetailsPage from "./pages/detailsPage/DetailsPage";
import ErrorPage from "./pages/error/ErrorPage";

import "./App.css";
import NavigationBarContext from "./contexts/NavigationBarContext";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movieDetails/:id", element: <DetailsPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <NavigationBarContext>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </NavigationBarContext>
    </>
  );
}

export default App;
