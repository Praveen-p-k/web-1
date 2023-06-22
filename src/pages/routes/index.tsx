import HomePage from "../home";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import {
  DEFAULT_ROUTE,
  HOME_PAGE,
  CONTACTS,
  STACKS,
  WORKS,
} from "../../helpers/constants/routes";
import Works from "../works";
import Stacks from "../stacks";
import ContactMe from "../contacts";
import Header from "../../components/header";

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path={DEFAULT_ROUTE}
      element={
        <>
          <Header />
          <Outlet />
        </>
      }
    >
      <Route index path={HOME_PAGE} element={<HomePage />} />
      <Route path={WORKS} element={<Works />} />
      <Route path={STACKS} element={<Stacks />} />
      <Route path={CONTACTS} element={<ContactMe />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
