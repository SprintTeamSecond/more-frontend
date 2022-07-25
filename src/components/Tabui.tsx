import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';

const TabMenu = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
`;

export const Tab = () => {
  const {
    colors: {
      neutral: {LIGHT_GREY},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [{name: '나의 레포지토리'}, {name: '좋아요한 레포지토리'}];

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div>
      <TabMenu>
        {menuArr.map((ele, index) => {
          const isCurrent = currentTab === index ? MEDIUM_BLUE : LIGHT_GREY;
          return (
            <li
              style={{cursor: 'pointer'}}
              key={`tab-menu-${index}`}
              onClick={() => selectMenuHandler(index)}>
              <Typography color={isCurrent}>{ele.name}</Typography>
            </li>
          );
        })}
      </TabMenu>
    </div>
  );
};
