import * as React from 'react';
import {dummyData} from 'src/constant';
import {GithubPost} from 'src/types';
const data = {
  _id: 'SprintTeamSecond',
  title: '개발자 레포지토리 공유 플랫폼',
  like: 1,
  description:
    '개발자들이 자신의 레포지토리를 사람들과 공유할 수 있는 플랫폼 입니다.',
  used_language: ['kotlin', 'react'],
  thumbnail: null,
  created_at: '2022.07.13',
};

interface useRepositoryProps {
  id?: string;
}

export const useRepository = ({id}: useRepositoryProps) => {
  const [repository, setRepository] = React.useState<GithubPost>({
    id: '',
    title: '',
    author: '',
    url: '',
    used_language: '',
    readme_url: '',
    full_name: '',
    stars: 0,
    post_like: 0,
    description: '',
    hashtag: '',
    thumbnail: '',
    created_at: '',
  });
  React.useEffect(() => {
    const repo = dummyData?.find(({id: targetId}) => id === targetId);
    if (repo) {
      setRepository(repo);
    }
  }, []);

  return repository;
};
