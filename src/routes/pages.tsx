import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Profile from '../pages/Profile';
import Callback from '../pages/Callback';
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
     path: '/profile',
    isPublic: true,
    element: <Profile />,
  }
];

export default pageRoutes;
