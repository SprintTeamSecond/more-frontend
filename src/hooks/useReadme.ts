import axios from 'axios';
import React, {useState} from 'react';

import {dummyData} from 'src/constant';

interface useReadmeProps {
  id?: string;
}
const BASE_URL = 'https://raw.githubusercontent.com';
export const useReadme = ({id}: useReadmeProps) => {
  const [readme, setReadme] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchReadMe = async ({repoAuthor, repoTitle, repoBranch}: any) => {
    const url = `${BASE_URL}/${repoAuthor}/${repoTitle}/${repoBranch}/README.md`;
    await axios
      .get(url)
      .then(({data}) => {
        setReadme([data]);
      })
      .catch((err) => {
        setError(true);
      });
  };

  React.useEffect(() => {
    const repo = dummyData.find(({id: targetId}) => id === targetId);

    if (repo) {
      const {author: repoAuthor, title: repoTitle} = repo;
      fetchReadMe({repoAuthor, repoTitle, repoBranch: 'develop'});
    }
  }, [dummyData]);
  return {readme, error};
};
