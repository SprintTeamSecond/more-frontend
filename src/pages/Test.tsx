import * as React from 'react';
import styled, {DefaultTheme, useTheme} from 'styled-components';
import {Input, Button, SearchIcon} from '../components/atoms';

import {useForm} from 'react-hook-form';
import {SKILL_LIST} from '../constant';
import {skillsListType} from '../types/skills';
import Typography from '../components/atoms/typography';

interface skillList extends skillsListType {
  isSelect: boolean;
}

const Test = () => {
  const {register, handleSubmit} = useForm();
  const {
    colors: {
      neutral: {LIGHT_GREY, WHITE},
      primary: {LIGHT_BLUE, DARK_BLUE, MEDIUM_BLUE},
    },
  } = useTheme();
  const [skillList, setSkillList] = React.useState<any[]>([]);

  const [selectedList, setSelectedList] = React.useState<skillList[]>([]);

  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    if (value.trim() !== '') {
      const match = SKILL_LIST.map((skill) => {
        const {name} = skill;
        if (name.includes(value)) return {...skill, isSelect: false};
        else return;
      }).filter((skill) => skill);

      setSkillList(match);
    } else {
      setSkillList([]);
    }
  };

  const onClickSkill = (value: string) => {
    const isExists = selectedList.find(
      ({value: selectedValue}) => value === selectedValue,
    );
    if (!isExists) {
      const target = skillList.find(
        ({value: skillListValue}: skillList) => value === skillListValue,
      );
      setSelectedList((prev) => [...prev, {...target, isSelect: true}]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
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
        <div style={{display: 'flex', gap: '5.33px'}}>
          {skillList?.map(({name, value, renderIcon}: skillList, index: number) => (
            <SearchStyle.TagList
              key={`${index}`}
              padding={'12px 16px'}
              borderRadius="24"
              borderColor={LIGHT_GREY}
              onClick={() => onClickSkill(value)}>
              <span>{renderIcon()}</span>
              <Typography weight="600" color={LIGHT_GREY}>
                {name}
              </Typography>
            </SearchStyle.TagList>
          ))}
        </div>
      </SearchStyle.Tag>
      {selectedList.length !== 0 && (
        <React.Fragment>
          <SearchStyle.Tag>
            <div style={{display: 'flex', gap: '5.33px'}}>
              {selectedList?.map(
                ({name, value, renderIcon}: skillList, index: number) => (
                  <SearchStyle.TagList
                    key={`${index}`}
                    padding={'12px 16px'}
                    borderRadius="24"
                    borderColor={DARK_BLUE}>
                    <span>{renderIcon()}</span>
                    <Typography weight="600" color={DARK_BLUE}>
                      {name}
                    </Typography>
                  </SearchStyle.TagList>
                ),
              )}
            </div>
            <Button
              padding="12px 16px"
              borderRadius="8"
              backgroundColor={MEDIUM_BLUE}>
              <Typography weight="600" color={WHITE}>
                확인
              </Typography>
            </Button>
          </SearchStyle.Tag>
        </React.Fragment>
      )}
    </SearchStyle.Container>
  );
};

export default Test;

const SearchStyle = {
  Wrapper: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid #abbed1;
    border-radius: 12px;
    gap: 16px;
  `,
  Form: styled.form<{backgroundColor: string; borderRadius: string}>`
    display: flex;
    max-width: 100%;
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: ${({borderRadius}) => borderRadius + 'px'};
  `,

  Tag: styled.div`
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  `,

  TagList: styled(Button)`
    display: flex;
    /* width: 112px; */
    height: 40px;
    gap: 5.33px;

    align-items: center;
    svg {
      width: 17.3px;
      height: 19.5px;
    }
  `,
};
