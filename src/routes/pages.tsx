import Login from '../pages/Login';
import Main from '../pages/Main';

const pageRoutes: {
  path: string;
  isPublic: boolean;
  element: JSX.Element;
}[] = [
  {
    path: '/',
    isPublic: true,
    element: <Main />,
  },
  {
    path: '/login',
    isPublic: true,
    element: <Login />,
  },
];

export default pageRoutes;
