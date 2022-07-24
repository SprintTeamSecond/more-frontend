import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Callback from '../pages/Callback';
import Detail from '../pages/Detail';

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
    path: '/callback',
    isPublic: true,
    element: <Callback />,
  },
  {
    path: '/login',
    isPublic: true,
    element: <Login />,
  },
  {
    path: '/detail',
    isPublic: true,
    element: <Detail />,
  },
];

export default pageRoutes;
