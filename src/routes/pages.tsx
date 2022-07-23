import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Profile from '../pages/Profile';

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
  {
     path: '/profile',
    isPublic: true,
    element: <Profile />,
  }
];

export default pageRoutes;
