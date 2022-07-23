import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useRecoilState} from 'recoil';
import {userStateType, userState} from '../states/user';
import {fetch} from '../lib/axios/uploadForm';

type FormData = {
  userName: string;
  title: string;
  repositoryUrl: string;
  description?: string;
  thumbnail?: string;
  tags?: string[];
};

type FormInput = Omit<FormData, 'thumbnail' | 'userName'>;

type UserRepo = {
  id: number;
  description: string | null;
  fullName: string;
  updatedAt: string;
  url: string;
};

export const FormRepository = () => {
  const navigate = useNavigate();
  const {fetchUserRepos, fetchFormData} = fetch();

  const [repos, setRepos] = useState<UserRepo[]>();
  const {register, handleSubmit} = useForm<FormInput>();
  const [formData, setFormData] = useState<FormInput>();

  const [userData] = useRecoilState<userStateType>(userState);

  const onSubmitHandler: SubmitHandler<FormInput> = (submitData) => {
    setFormData(submitData);
  };

  useEffect(() => {
    formData &&
      //userData.username && fetchFormData<FormData>({...formData, userName: userData.username})
      fetchFormData<FormData>({...formData, userName: 'hongbeen'})
        .then(() => {
          navigate(-1);
        })
        .catch((e) => alert('잠시 후에 다시 시도해주세요.'));
  }, [formData]);

  useEffect(() => {
    // userData.username && fetchUserRepos(userData.username)
    fetchUserRepos('hong-been')
      .then((repos) => setRepos(repos))
      .catch((e) => alert('잠시 후에 다시 시도해주세요.'));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>
        <span>제목</span>
        <input
          placeholder="title"
          {...register('title', {required: true, maxLength: 30})}></input>
      </label>
      <label>
        <span>한줄 소개</span>
        <input
          placeholder="description"
          {...register('description', {required: false})}></input>
      </label>
      <label>
        <span>내 레파지토리 가져오기</span>
        <select {...register('repositoryUrl', {required: true})}>
          {repos?.map((repo) => (
            <option key={repo.id} value={repo.url}>
              {`${repo.fullName} - ${repo.description || ''} - ${repo.updatedAt}`}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>해시태그</span>
        <input placeholder="tags" {...register('tags', {required: false})}></input>
      </label>
      <button>등록</button>
    </form>
  );
};
