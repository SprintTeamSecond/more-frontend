import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components';
import Typography from '../components/atoms/typography';

const TabMenu = styled.ul`
  background-color: #ffffff;
  color: gray;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: left;
  list-style: none;
  margin-bottom: 600px;
  margin-right: 250px;

  .submenu {
    width: 250px;
    padding: 15px 10px;
    cursor: pointer;
  }

  .focused {
    color: #0671e0;
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
  margin-bottom: 400px;
  height: 500px;
`;

export const Tabui = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [{name: '나의 레포지토리'}, {name: '좋아요한 레포지토리'}];

  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}>
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
      </div>
    </>
  );
};
