import Login from "../pages/Login";

const pageRoutes: {
  path: string;
  isPublic: boolean;
  element: JSX.Element;
}[] = [
  {
    path: "/login",
    isPublic: true,
    element: <Login />,
  },
];

export default pageRoutes;
