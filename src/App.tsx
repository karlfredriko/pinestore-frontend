import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/Root";
import HomePage from "./routes/HomePage";
import CartPage from "./routes/CartPage";
import { pineListLoader } from "./utils/httpClient";
import PineDetailsPage from "./routes/PineDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} loader={pineListLoader}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/pine/:id" element={<PineDetailsPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
