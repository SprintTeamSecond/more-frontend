import Main from 'src/pages/Main';

import {Login, Profile, Callback} from 'src/pages/auth';

import {
  UploadRepositoryPage,
  CreateRepositoryPage,
  DetailRepositoryPage,
} from 'src/pages/post';
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
    path: '/auth/callback',
    isPublic: true,
    element: <Callback />,
  },
  {
    path: '/auth/login',
    isPublic: true,
    element: <Login />,
  },
  {
    path: '/auth/profile',
    isPublic: true,
    element: <Profile />,
  },
  {
    path: '/post/new',
    isPublic: true, // true가 맞는데, 개발편의상 개발중에만 true로 해놓을게요!
    element: <CreateRepositoryPage />,
  },
  {
    path: '/post/:id',
    isPublic: true, // true가 맞는데, 개발편의상 개발중에만 true로 해놓을게요!
    element: <UploadRepositoryPage />,
  },
  {
    path: '/post/detail/:repositoryId',
    isPublic: true,
    element: <DetailRepositoryPage />,
  },
];

export default pageRoutes;
