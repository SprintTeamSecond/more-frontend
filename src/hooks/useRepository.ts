import * as React from 'react';
import {useParams} from 'react-router-dom';

import {dummyData} from 'src/constant';
import {GithubPost} from 'src/types';

export const useRepository = () => {
  const {repositoryId} = useParams();
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
    const repo = dummyData?.find(({id: targetId}) => repositoryId === targetId);
    if (repo) setRepository(repo);
  }, [repositoryId]);

  return repository;
};
