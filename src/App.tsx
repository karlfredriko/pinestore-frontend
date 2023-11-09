import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/Root";
import HomePage from "./routes/HomePage";
import CartPage from "./routes/CartPage";
import { pineListLoader } from "./utils/helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} loader={pineListLoader}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
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
