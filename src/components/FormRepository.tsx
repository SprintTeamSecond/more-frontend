import {useState, useEffect, useCallback, MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useAuth} from '../hooks';
import styled from 'styled-components';
import {fetch} from '../lib/axios/uploadRepository';

type FormData = {
  userName: string;
  title: string;
  repositoryUrl: string;
  description?: string;
  thumbnail?: string;
  tags?: string[];
};

type FormInput = Pick<FormData, 'title' | 'description'>;

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
  const {userData} = useAuth();

  const [repos, setRepos] = useState<UserRepo[]>();
  const [formData, setFormData] = useState<FormInput>();
  const [isReposSelectShow, setIsReposSelectShow] = useState(false);
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [RepoTitle, setRepoTitle] = useState<string>('');
  const [RepoDesc, setRepoDesc] = useState<string>('');

  const {register, handleSubmit} = useForm<FormInput>();
  const onSubmitHandler: SubmitHandler<FormInput> = (submitData) => {
    setFormData(submitData);
  };

  const handleSelectClick: MouseEventHandler<HTMLElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.repos')) return;

    setIsReposSelectShow(true);
  }, []);

  const handleSelectItemClick: MouseEventHandler<HTMLElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    const item = target.closest('.repo') as HTMLElement;
    if (!item) return;

    setIsReposSelectShow(false);
    setRepoUrl(item.dataset.url || '');
    setRepoTitle(item.dataset.title || '');
    setRepoDesc(item.dataset.desc || '');
  }, []);

  useEffect(() => {
    formData &&
      repoUrl &&
      //userData.username && fetchFormData<FormData>({...formData, userName: userData.username})
      fetchFormData<FormData>({
        ...formData,
        userName: 'facebook',
        repositoryUrl: repoUrl,
      })
        .then(() => {
          console.log({...formData, userName: 'facebook', repositoryUrl: repoUrl});
          alert('성공적으로 등록하였습니다. 메인페이지로 이동합니다.');
          navigate('/');
        })
        .catch((e) => alert('잠시 후에 다시 시도해주세요.'));
  }, [formData]);

  useEffect(() => {
    // userData.username && fetchUserRepos(userData.username)
    fetchUserRepos('facebook')
      .then((repos) => setRepos(repos))
      .catch((e) => alert('잠시 후에 다시 시도해주세요.'));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>
        <S.Title
          placeholder="제목을 써주세요"
          {...register('title', {required: true, maxLength: 30})}></S.Title>
      </label>
      <label>
        <S.Desc
          placeholder="내 레파지토리의 한 줄 소개를 작성해주세요"
          {...register('description', {required: false})}></S.Desc>
      </label>
      <div>
        <S.DropDownTitle onClick={handleSelectClick} className="repos">
          {!RepoTitle && !RepoDesc ? (
            <S.RepoTitle>{`내 레파지토리 가져오기`}</S.RepoTitle>
          ) : (
            <>
              <S.RepoTitle>{RepoTitle && RepoTitle}</S.RepoTitle>
              <S.RepoDesc>{RepoDesc && RepoDesc}</S.RepoDesc>
            </>
          )}
        </S.DropDownTitle>
        {isReposSelectShow && (
          <S.DropDownList>
            {repos?.map((repo) => (
              <S.DropDownItem
                key={repo.id}
                onClick={handleSelectItemClick}
                className="repo"
                data-url={repo.url}
                data-title={repo.fullName}
                data-desc={repo.description}>
                <S.RepoTitle>{repo.fullName}</S.RepoTitle>
                <S.RepoDesc>{repo.description}</S.RepoDesc>
                <S.RepoDate>{repo.updatedAt}</S.RepoDate>
              </S.DropDownItem>
            ))}
          </S.DropDownList>
        )}
      </div>
      <S.Buttons>
        <button>작성 취소하기</button>
        <button>올리기</button>
      </S.Buttons>
    </form>
  );
};

const S = {
  Title: styled.input`
    font-size: 42px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.colors.neutral.BLACK};
    margin-bottom: 56px;

    &::placeholder {
      color: ${(props) => props.theme.colors.neutral.LIGHT_GREY};
    }
  `,
  Desc: styled.input`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.colors.neutral.BLACK};
    margin-bottom: 77.5px;

    &::placeholder {
      color: ${(props) => props.theme.colors.neutral.LIGHT_GREY};
    }
  `,
  DropDownItem: styled.div`
    max-width: 100%;
    cursor: pointer;
    min-height: 29px;
    height: fit-content;
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin: 24px 32px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    color: ${(props) => props.theme.colors.neutral.DARK_GREY};

    &:hover {
      color: ${(props) => props.theme.colors.primary.MEDIUM_BLUE};
    }
  `,
  DropDownTitle: styled.div`
    cursor: pointer;
    min-height: 29px;
    height: fit-content;
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin: 5px 0;
    padding: 13px 0;
    display: flex;
    color: ${(props) => props.theme.colors.neutral.DARK_GREY};
    border-style: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral.GREY_BLUE};
    gap: 8px;
  `,
  DropDownList: styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 396px;
    width: 100%;
    overflow-y: scroll;
    border: 1px solid #abbed1;
    border-radius: 12px;
  `,
  RepoTitle: styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: inherit;
  `,
  RepoDesc: styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    width: 313px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  `,
  RepoDate: styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    margin-left: 10px;
  `,
  Buttons: styled.div`
    position: fixed;
    height: 112px;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background-color: ${(props) => props.theme.colors.neutral.SILVER}; */
    background-color: silver;
    display: flex;
  `,
};
