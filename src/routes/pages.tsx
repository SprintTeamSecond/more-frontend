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
<<<<<<< HEAD
=======
     path: '/profile',
    isPublic: true,
    element: <Profile />,
  }
>>>>>>> a1b6a69737aac3be4bc695fe88684d6f20701cc4
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
    path: '/detail',
    isPublic: true,
    element: <Detail />,
  },
];

export default pageRoutes;
