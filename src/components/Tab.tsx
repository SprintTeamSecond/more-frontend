import React from 'react';
import styled, {useTheme} from 'styled-components';
import TypoGraphy from '../components/atoms/typography';
type Tabs = {
  key: string;
  label: string;
  children: React.ReactNode;
};

interface TabProps {
  children?: React.ReactNode;
  tabList: Tabs[];
  gutter?: number;
}

export const Tab: React.FC<TabProps> = ({tabList, gutter}) => {
  const {
    colors: {
      primary: {MEDIUM_BLUE},
      neutral: {LIGHT_GREY},
    },
  } = useTheme();
  const [currentTab, setCurrentTab] = React.useState<string>(tabList[0]['key']);
  const renderCurrentTab = tabList.find(({key}) => key === currentTab)?.children;

  return (
    <TabStyle.Container>
      <TabStyle.Header gutter={gutter}>
        {tabList?.map(({key, label}) => {
          const isCurrent = currentTab == key;
          return (
            <li key={`tab-${key}`} onClick={() => setCurrentTab(key)}>
              <TypoGraphy
                size={'20'}
                weight={isCurrent ? '700' : '500'}
                color={isCurrent ? MEDIUM_BLUE : LIGHT_GREY}>
                {label}
              </TypoGraphy>
            </li>
          );
        })}
      </TabStyle.Header>
      <TabStyle.Main>{renderCurrentTab}</TabStyle.Main>
    </TabStyle.Container>
  );
};

const TabStyle = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.ul<{gutter?: number}>`
    display: flex;
    flex-wrap: wrap;
    gap: ${({gutter}) => (gutter ? gutter + 'px' : null)};
    li {
      cursor: pointer;
    }
  `,
  Main: styled.div``,
};
