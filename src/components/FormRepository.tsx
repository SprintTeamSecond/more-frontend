import {useState, useEffect, useCallback, MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, SubmitHandler} from 'react-hook-form';
import {useAuth} from '../hooks';
import styled from 'styled-components';
import {fetch} from '../lib/axios/uploadRepository';
import {
  GithubIcon,
  DownArrowIcon,
  UpArrowIcon,
  PlusIcon,
} from '../components/atoms/Icon';
import Test from '../pages/Test';

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
  const {userData} = useAuth();
  const {fetchUserRepos, fetchFormData} = fetch(); //요기서 서버 api 통신하는 함수 따로 빼놨어요

  const [repos, setRepos] = useState<UserRepo[]>(); //이거는 깃헙api로 레포목록 가져와서 저장하는 역할
  const [formData, setFormData] = useState<FormInput>(); //이거는 제목, 한줄설명 input 저장

  const [isReposSelectShow, setIsReposSelectShow] = useState(false);
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [RepoTitle, setRepoTitle] = useState<string>('');
  const [RepoDesc, setRepoDesc] = useState<string>('');

  const {register, handleSubmit} = useForm<FormInput>();
  const onSubmitHandler: SubmitHandler<FormInput> = (submitData) => {
    setFormData(submitData);
  };

  const handleSelectClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.repos')) return;

      isReposSelectShow ? setIsReposSelectShow(false) : setIsReposSelectShow(true);
    },
    [isReposSelectShow],
  );

  const handleSelectItemClick: MouseEventHandler<HTMLElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    const item = target.closest('.repo') as HTMLElement;
    if (!item) return;

    setIsReposSelectShow(false);
    setRepoUrl(item.dataset.url || '');
    setRepoTitle(item.dataset.title || '');
    setRepoDesc(item.dataset.desc || '');
  }, []);

  const handleCancelClick = useCallback(() => {
    if (confirm('취소하시겠습니까?')) {
      navigate('/');
    }
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
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.TitleContainer>
        <S.Title
          placeholder="제목을 써주세요"
          {...register('title', {required: true, maxLength: 30})}></S.Title>
      </S.TitleContainer>
      <S.DescContainer>
        <S.Desc
          placeholder="내 레파지토리의 한 줄 소개를 작성해주세요"
          {...register('description', {required: false})}></S.Desc>
      </S.DescContainer>
      <S.SelectorsContainer>
        <S.DropDownTitle onClick={handleSelectClick} className="repos">
          {!RepoTitle && !RepoDesc ? (
            <>
              <S.DropDownTitleLeft>
                <GithubIcon />
                <S.RepoTitle>{`내 레파지토리 가져오기`}</S.RepoTitle>
              </S.DropDownTitleLeft>
              {isReposSelectShow ? <UpArrowIcon /> : <DownArrowIcon />}
            </>
          ) : (
            <>
              <S.DropDownTitleLeft>
                <GithubIcon />
                <S.RepoTitle>{RepoTitle && RepoTitle}</S.RepoTitle>
                <S.RepoDesc>{RepoDesc && RepoDesc}</S.RepoDesc>
              </S.DropDownTitleLeft>
              <DownArrowIcon />
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
      </S.SelectorsContainer>
      <S.Footer>
        <S.Buttons>
          <S.ButtonCancel onClick={handleCancelClick}>작성 취소하기</S.ButtonCancel>
          <S.ButtonSubmit>올리기</S.ButtonSubmit>
        </S.Buttons>
      </S.Footer>
    </S.Form>
  );
};

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 100px 0;
  `,
  TitleContainer: styled.label`
    flex-grow: 1;
  `,
  DescContainer: styled.label`
    flex-grow: 1;
  `,
  SelectorsContainer: styled.div`
    flex-grow: 6;
    position: relative;
  `,
  Title: styled.input`
    font-size: 42px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.colors.neutral.BLACK};

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
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.colors.neutral.DARK_GREY};
    border-style: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral.GREY_BLUE};
  `,
  DropDownTitleLeft: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  DropDownList: styled.ul`
    z-index: 1;
    position: absolute;
    background-color: ${(props) => props.theme.colors.neutral.WHITE};
    display: flex;
    flex-direction: column;
    height: 280px;
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
    overflow: hidden;
  `,
  RepoDate: styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    margin-left: 10px;
  `,
  Footer: styled.div`
    position: fixed;
    height: 112px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.neutral.SILVER};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Buttons: styled.div`
    width: 80%;
    display: flex;
    justify-content: right;
    gap: 16px;
  `,

  ButtonCancel: styled.button`
    width: 157px;
    height: 48px;
    background-color: ${(props) => props.theme.colors.neutral.SILVER};
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.colors.neutral.LIGHT_GREY_BLUE};
    color: ${(props) => props.theme.colors.neutral.LIGHT_GREY};
  `,
  ButtonSubmit: styled.button`
    width: 157px;
    height: 48px;
    background-color: ${(props) => props.theme.colors.primary.MEDIUM_BLUE};
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.colors.primary.MEDIUM_BLUE};
    color: ${(props) => props.theme.colors.neutral.WHITE};
  `,
};
