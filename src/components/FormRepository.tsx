import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Axios} from '../lib/axios';
import {PostCreateForm} from '../types';

type FormData = {
  title: string;
  repositoryUrl: string;
  description?: string;
  thumnail?: string;
  tags?: string[];
};

/**
 * 제목(필수), 깃허브 레포URL(필수), 한줄소개, 썸네일, 해시태그
 * 입력받아서 state로 저장하고 있는 컴포넌트
 * submit 이벤트에 서버에 보낸다
 *
 * HTTP 통신 성공하면 이전페이지로 돌아간다.
 *  */
export const FormRepository = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>();

  const fetchFormData = async (formData: FormData) => {
    try {
      await Axios.post<PostCreateForm, FormData>('/post', formData);
      navigate(-1);
    } catch (e) {
      console.error(e);
      alert('잠시 후 다시 시도해주세요.');
    }
  };

  const onSubmitHandler: SubmitHandler<FormData> = (submitData) => {
    setFormData(submitData);
  };

  useEffect(() => {
    formData && fetchFormData(formData);
  }, [formData]);

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
          <option value="a-repo">a-repo</option>
          <option value="b-repo">b-repo</option>
          <option value="c-repo">c-repo</option>
        </select>
      </label>
      <label>
        <span>썸네일</span>
        <input
          placeholder="thumnail"
          {...register('thumnail', {required: false})}></input>
      </label>
      <label>
        <span>해시태그</span>
        <input placeholder="tags" {...register('tags', {required: false})}></input>
      </label>
      <button>등록</button>
    </form>
  );
};
