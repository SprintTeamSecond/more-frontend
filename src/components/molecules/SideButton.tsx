import styled from 'styled-components';

type buttonList = {
  onClick: () => void;
  renderIcon: () => React.ReactNode;
};

interface SideButtonProps {
  buttonList: buttonList[];
}

export const SideButton: React.FC<SideButtonProps> = ({buttonList}) => {
  return (
    <SideButtonContainer>
      {buttonList?.map(({onClick, renderIcon}, index) => (
        <SideButtonItem key={`sideButton-${index}`} onClick={onClick}>
          {renderIcon()}
        </SideButtonItem>
      ))}
    </SideButtonContainer>
  );
};

const SideButtonContainer = styled.div`
  position: fixed;
  bottom: 42px;
  right: 12%;
`;
const SideButtonItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 2px 11px rgba(9, 33, 57, 0.1);
  cursor: pointer;
`;
