import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Callback from '../pages/Callback';
import UploadRepository from '../pages/UploadRepository';
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
    path: '/uploadRepository',
    isPublic: false,
    element: <UploadRepository />,
  },

];

export default pageRoutes;
