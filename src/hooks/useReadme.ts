import axios from 'axios';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import {dummyData} from 'src/constant';

interface fetchReadMeArgument {
  author?: string;
  title?: string;
  branch?: string;
}
const BASE_URL = 'https://raw.githubusercontent.com';

export const useReadme = () => {
  const {repositoryId} = useParams();
  const [readme, setReadme] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const fetchReadMe = async ({author, title, branch}: fetchReadMeArgument) => {
    const url = `${BASE_URL}/${author}/${title}/${branch}/README.md`;
    await axios
      .get(url)
      .then(({data}) => {
        setError(false);
        setReadme(data);
      })
      .catch((err) => {
        setError(true);
      });
  };

  React.useEffect(() => {
    const repository = dummyData.find(({id: targetId}) => repositoryId === targetId);

    if (repository) {
      fetchReadMe({
        author: repository?.author,
        title: repository?.title,
        branch: 'develop',
      });
    }
  }, [repositoryId]);
  return {readme, error};
};
