import axios, {AxiosResponse, AxiosError} from 'axios';
import {getAccessTokenParams} from '../../types/Oauth';

export const GET_GITHUB_ACCESS_TOKEN = async ({
  client_id,
  client_secret,
  code,
}: getAccessTokenParams) => {
  return axios({
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    url: 'https://github.com/login/oauth/access_token',
    method: 'POST',
    params: {
      client_id,
      client_secret,
      code,
    },
  })
    .then((res: AxiosResponse) => res)
    .catch((err: AxiosError) => err);
};
