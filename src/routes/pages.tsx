import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Main from '../pages/Main';
import Callback from '../pages/Callback';
import UploadRepository from '../pages/UploadRepository';
import Detail from '../pages/Detail';

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
  },
  {
    path: '/post/new',
    isPublic: true, // false가 맞는데, 개발편의상 개발중에만 true로 해놓을게요!
    element: <UploadRepository />,
  },
  {
    path: '/post/:id',
    isPublic: true, // false가 맞는데, 개발편의상 개발중에만 true로 해놓을게요!
    element: <UploadRepository />,
  },
  {
    path: '/detail/:id/:repo',
    isPublic: true,
    element: <Detail />,
  },
];

export default pageRoutes;
