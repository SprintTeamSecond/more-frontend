import axios from 'axios';
import React, {useState} from 'react';

const useReadme = () => {
  const [readme, setReadme] = useState();
  const url = `https://raw.githubusercontent.com/SprintTeamSecond/more-frontend/develop/README.md`;

  axios.get(url).then((res) => setReadme(res.data));

  return [readme] as const;
};

export default useReadme;
