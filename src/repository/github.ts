import {RepositoryforDropdown} from './../types/index';
import axios from 'axios';
import {GithubUser} from '../types';
import ENV from '@ENV';

class GithubRepository {
  private BASE_URL = ENV.BASE_URL;

  getAccessToken = async (
    code: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
  ) => {
    const {data} = await axios.get<string>(
      `${this.BASE_URL}/auth/access_token?code=${code}`,
    );
    return data;
  };
  getUser = async (access_token: string) => {
    return await axios.get<GithubUser>(
      `${this.BASE_URL}/auth/github?token=${access_token}`,
    );
  };
  getRepositories = async (access_token: string) => {
    return await axios.get<RepositoryforDropdown[]>(
      `${this.BASE_URL}/repositories?token=${access_token}`,
    );
  };
}

export default new GithubRepository();
