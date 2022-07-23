import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

// type PropsType = {}

type FormValue = {
	title: string,
  repositoryUrl: string,
  description?:string,
  thumnail?:string,
  tags?:string[]
}

/**
 * 제목(필), 깃허브 레포URL(필), 한줄소개, 썸네일, 해시태그 를
 * 입력받아서 state로 저장하고 있는 컴포넌트
 * submit 이벤트에 서버에 보낸다
 * 
 * HTTP 통신 성공하면 이전페이지로 돌아간다.
 *  */
export const FormRepository = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data)
  };

  const titleRef = useRef('');
  titleRef.current = watch("title");
  // console.log(watch("title"));
    
  return (
  <form onSubmit={handleSubmit(onSubmitHandler)}>
    <label>
      <span>제목</span>
      <input 
        placeholder='title' 
        {...register("title", { required: true, maxLength: 30 })}></input>
        {/* {errors.title && errors.title.type === "required" && (
          <div>{`제목을 입력해 주세요. :)`}</div>
        )} */}
    </label>
    <label>
      <span>깃허브 레포 URL</span>
      <input 
        placeholder='repositoryUrl' 
        {...register("repositoryUrl", { required: true })}></input>
        {/* {errors.repositoryUrl && errors.repositoryUrl.type === "required" && (
          <div>{`레포지토리 주소를 입력해 주세요. :)`}</div>
        )} */}
    </label>
    <label>
      <span>한줄 소개</span>
      <input 
        placeholder='description' 
        {...register("description", { required: false })}></input>
    </label>
    <label>
      <span>썸네일</span>
      <input 
        placeholder='thumnail' 
        {...register("thumnail", { required: false })}></input>
    </label>
    <label>
      <span>해시태그</span>
      <input 
        placeholder='tags' 
        {...register("tags", { required: false })}></input>
    </label>
    <button>등록</button>
  </form>
  )
};

