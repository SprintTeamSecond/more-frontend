import * as React from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import {Input, Button, SearchIcon} from '../components/atoms';

import {useForm} from 'react-hook-form';
import {SKILL_LIST} from '../constant';
import {skillsListType} from '../types/skills';
import Typography from '../components/atoms/typography';
const Test = () => {
  const {register, handleSubmit} = useForm();
  const {
    colors: {
      neutral: {LIGHT_GREY},
      primary: {LIGHT_BLUE},
    },
  } = useTheme();
  const [skillList, setSkillList] = React.useState<skillsListType[]>([]);

  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    if (value.trim() !== '') {
      const match = SKILL_LIST?.filter(({name}) => name.includes(value));
      setSkillList(match);
    } else {
      setSkillList([]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <SearchStyle.Container>
        <SearchStyle.Form
          onSubmit={onSubmit}
          borderRadius={'8'}
          backgroundColor={LIGHT_BLUE}>
          <Input
            padding={'15px 16px 15px 12px'}
            borderRadius={'8'}
            backgroundColor={LIGHT_BLUE}
            placeholder="사용한 언어를 검색하여 등록해보세요"
            {...register('skills', {
              onChange,
              onBlur: (e) => {},
            })}
          />
          <Button>
            <SearchIcon />
          </Button>
        </SearchStyle.Form>
        <SearchStyle.Tag>
          {skillList?.map(({name, renderIcon}, index) => (
            <SearchStyle.TagList
              key={`${index}`}
              padding={'12px 16px'}
              borderRadius="24"
              borderColor={LIGHT_GREY}>
              <span>{renderIcon()}</span>
              <Typography color={LIGHT_GREY}>{name}</Typography>
            </SearchStyle.TagList>
          ))}
        </SearchStyle.Tag>
      </SearchStyle.Container>
    </S.Container>
  );
};

export default Test;

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
const SearchStyle = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;

    padding: 24px;
    border: 1px solid #abbed1;
    border-radius: 12px;
    overflow-x: hidden;
  `,
  Form: styled.form<{backgroundColor: string; borderRadius: string}>`
    display: flex;
    max-width: 100%;
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: ${({borderRadius}) => borderRadius + 'px'};
  `,
  Tag: styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    gap: 8px;
  `,
  TagList: styled(Button)`
    display: flex;
    width: 112px;

    height: 40px;
    gap: 5.33px;
    align-items: center;
    svg {
      width: 17.3px;
      height: 19.5px;
    }
  `,
};
