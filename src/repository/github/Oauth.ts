import axios, {AxiosResponse, AxiosError} from 'axios';
import {getAccessTokenParams} from '../../types/Oauth';
import {useRecoilState} from 'recoil';

import {isLoggedInState} from '../../states/auth';

export const LOGIN_ACTION = async ({
  client_id,
  client_secret,
  code,
}: getAccessTokenParams) => {
  return {error: null, data: {status: 200}};
  // return axios({
  //   headers: {
  //     'Content-Type': 'application/json;charset=UTF-8',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   url: 'https://github.com/login/oauth/access_token',
  //   method: 'POST',
  //   params: {
  //     client_id,
  //     client_secret,
  //     code,
  //   },
  // })
  //   .then((res: AxiosResponse) => {
  //     if (res.data) setIsLoggedIn(true);
  //   })
  //   .catch((err: AxiosError) => err);
};
