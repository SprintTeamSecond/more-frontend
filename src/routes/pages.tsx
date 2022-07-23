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
    isPublic: true, // false가 맞는데, 개발편의상 개발중에만 true로 해놓을게요!
    element: <UploadRepository />,
  },
];

export default pageRoutes;
