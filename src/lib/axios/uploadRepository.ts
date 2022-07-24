import {Endpoints} from '@octokit/types';
import {apiAxios, githubAxios} from '.';
import {PostCreateForm} from '../../types';

type UserReposResponseData =
  Endpoints['GET /users/{username}/repos']['response']['data'];

export const fetch = () => {
  const fetchUserRepos = async (userName: string) => {
    try {
      const response = await githubAxios.get(`/users/${userName}/repos`);
      const data: UserReposResponseData = response.data;

      const repos = data.map((repo) => {
        const {
          id,
          description,
          full_name: fullName,
          updated_at: updatedAt,
          url,
        } = repo;

        const trimedUpdatedAt = updatedAt
          ? updatedAt.split('').slice(0, 10).join('').replaceAll('-', '.')
          : '';

        return {
          id,
          description,
          fullName,
          updatedAt: trimedUpdatedAt,
          url,
        };
      });
      return repos;
    } catch (e) {
      console.error(e);
    }
  };

  //userName: userData.username,
  const fetchFormData = async <FormDataType>(formData: FormDataType) => {
    try {
      await apiAxios.post<FormDataType, PostCreateForm>('/post', formData);
    } catch (e) {
      console.error(e);
    }
  };

  return {fetchUserRepos, fetchFormData};
};
