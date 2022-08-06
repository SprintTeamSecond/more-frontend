import React, {useState, useEffect, useCallback, MouseEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks';
import styled from 'styled-components';
import {GithubIcon, DownArrowIcon, UpArrowIcon} from '../../components/atoms/Icon';
import {PostCreateForm, RepositoryForDropdown} from 'src/types';
import GithubRepository from 'src/repository/github';
import PostRepository from 'src/repository/post';
import moment from 'moment';

const CreateRepositoryPage = () => {
  const navigate = useNavigate();
  const {userData} = useAuth();
  const [selectedRepository, setSelectedRepository] =
    useState<RepositoryForDropdown | null>(null);
  const [createForm, setCreateForm] = useState<PostCreateForm>({
    author: '',
    github_repository_id: '',
    title: '',
    description: '',
    hashtag: '',
  });
  const [repositories, setRepositories] = useState<RepositoryForDropdown[]>([]);
  const [isReposSelectShow, setIsReposSelectShow] = useState(false);

  const handleSelectClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.repos')) return;

      isReposSelectShow ? setIsReposSelectShow(false) : setIsReposSelectShow(true);
    },
    [isReposSelectShow],
  );

  const handleSelectItemClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    repo: RepositoryForDropdown,
  ) => {
    const target = e.target as HTMLElement;
    const item = target.closest('.repo') as HTMLElement;
    if (!item) return;

    setIsReposSelectShow(false);
    setSelectedRepository((prev) => {
      return {
        ...repo,
      };
    });
    setCreateForm((prev) => {
      return {
        ...prev,
        github_repository_id: repo.id,
      };
    });
  };

  const handleCancelClick = useCallback(() => {
    if (confirm('취소하시겠습니까?')) {
      navigate('/');
    }
  }, []);

  const onSubmit = async () => {
    try {
      setCreateForm((prev) => {
        return {
          ...prev,
          author: userData?.id as string,
        };
      });
      console.log(createForm.author);

      await PostRepository.createPost(createForm);
      const token = localStorage.getItem('ACCESS_TOKEN');
      const {data} = await GithubRepository.getRepositories(token as string);
      setRepositories(data);
    } catch (e) {
      console.log(e);
      alert('게시글 생성에 실패하였습니다.');
    }
  };

  useEffect(() => {
    const getRepositories = async () => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      const {data} = await GithubRepository.getRepositories(token as string);
      setRepositories(data);
    };
    getRepositories();
  }, []);

  return (
    <S.Form onSubmit={onSubmit}>
      <S.TitleContainer>
        <S.Title
          placeholder="제목을 써주세요"
          value={createForm.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateForm((prev) => {
              return {
                ...prev,
                title: e.target.value,
              };
            })
          }></S.Title>
      </S.TitleContainer>
      <S.DescContainer>
        <S.Desc
          placeholder="내 레파지토리의 한 줄 소개를 작성해주세요"
          value={createForm.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateForm((prev) => {
              return {
                ...prev,
                description: e.target.value,
              };
            })
          }></S.Desc>
      </S.DescContainer>
      <S.SelectorsContainer>
        <S.DropDownTitle onClick={handleSelectClick} className="repos">
          {!selectedRepository ? (
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
                <S.RepoTitle>{selectedRepository?.full_name}</S.RepoTitle>
                <S.RepoDesc>{selectedRepository?.description}</S.RepoDesc>
              </S.DropDownTitleLeft>
              <DownArrowIcon />
            </>
          )}
        </S.DropDownTitle>
        {isReposSelectShow && (
          <S.DropDownList>
            {repositories?.map((repo) => (
              <S.DropDownItem
                key={repo.id}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  handleSelectItemClick(e, repo)
                }
                className="repo"
                data-url={repo.url}
                data-title={repo.full_name}
                data-desc={repo.description}>
                <S.RepoTitle>{repo.full_name}</S.RepoTitle>
                <S.RepoDesc>{repo.description}</S.RepoDesc>
                <S.RepoDate>
                  {moment(repo.updated_at).format('YYYY-MM-DD')}
                </S.RepoDate>
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

export default CreateRepositoryPage;
