import axios from 'axios';
import qs from 'qs';
import {GithubPost, GithubUser, PostCreateForm} from '../types';

class PostRepository {
  private BASE_URL = process.env.REACT_APP_BASE_URL;
  private DefaultQueryOption = {
    _start: 0,
    _limit: 30,
  };
  getPosts = async (filter?: {[key: string]: string}[]) => {
    const filterString = qs.stringify({
      ...this.DefaultQueryOption,
      ...(filter || {}),
    });
    return await axios.get<GithubPost[]>(`${this.BASE_URL}/posts?${filterString}`);
  };
  getOnePost = async (
    id: string,
    token: string,
    filter?: {[key: string]: string}[],
  ) => {
    const filterString = qs.stringify({
      token,
      ...this.DefaultQueryOption,
      ...(filter || {}),
    });
    return await axios.get<GithubPost>(
      `${this.BASE_URL}/posts/${id}?${filterString}`,
    );
  };
  createPost = async (form: PostCreateForm) => {
    const submitForm = qs.stringify({
      ...form,
    });

    return await axios.post(`${this.BASE_URL}/posts?${submitForm}`);
  };
}

export default new PostRepository();
