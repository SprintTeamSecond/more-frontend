import axios from 'axios';
import {GithubUser} from '../types';

class GithubRepository {
  private BASE_URL = process.env.REACT_APP_BASE_URL;

  getAccessToken = async (
    code: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  ) => {
    return (
      await axios.get<string>(`${this.BASE_URL}/auth/access_token?code=${code}`)
    ).data;
  };
  getUser = async (access_token: string) => {
    return await axios.get<GithubUser>(
      `${this.BASE_URL}/auth/github?token=${access_token}`,
    );
  };
}

export default new GithubRepository();
