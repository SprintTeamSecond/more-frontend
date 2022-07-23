import * as React from 'react';
import qs, {ParsedQs} from 'qs';
import axios, {AxiosResponse, AxiosError} from 'axios';
type getAccessTokenParams = {
  client_id: string | undefined;
  client_secret: string | undefined;
  code: string | ParsedQs | string[] | ParsedQs[] | undefined;
  redirect_uri: string;
};

const Callback = () => {
  const getAccessToken = ({
    client_id,
    client_secret,
    code,
    redirect_uri,
  }: getAccessTokenParams) => {
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/json',
      },
      url: 'https://github.com/login/oauth/access_token',
      method: 'POST',
      data: {
        client_id,
        client_secret,
        code,
        redirect_uri,
      },
    })
      .then((res: AxiosResponse) => console.log(res))
      .catch((err: AxiosError) => console.log(err));
  };

  React.useEffect(() => {
    const {code} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    try {
      const params: getAccessTokenParams = {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_SECRET_KEY,
        code,
        redirect_uri: 'http://localhost:3000/callback',
      };
      getAccessToken(params);
    } catch {
      alert('로그인 실패');
    } finally {
    }
  }, [location, history]);
  return (
    <div>
      <span>깃허브로 로그인 중입니다</span>
    </div>
  );
};

export default Callback;
