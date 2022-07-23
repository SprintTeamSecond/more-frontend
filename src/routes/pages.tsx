import Login from '../pages/Login';
import Landing from '../pages/Landing';

const pageRoutes: {
  path: string;
  isPublic: boolean;
  element: JSX.Element;
}[] = [
  {
    path: '/',
    isPublic: true,
    element: <Landing />,
  },
  {
    path: '/login',
    isPublic: true,
    element: <Login />,
  },
];

export default pageRoutes;
