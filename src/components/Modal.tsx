import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Button, CloseIcon} from './atoms';
import TypoGraphy from './atoms/typography';

type ButtonConfig = {
  text: string;
  color: {
    border: string;
    background: string;
    textColor: string;
  };
  onClick: () => void;
};

interface ModalProps {
  modalVisible: boolean;
  title: string;
  children?: React.ReactNode;
  footer?: ButtonConfig[];
  onClose: () => void;
  onSubmit?: () => void;
}

export const Modal = ({
  modalVisible,
  title,
  children,
  footer,
  onClose,
  onSubmit,
}: ModalProps) => {
  const {
    colors: {
      neutral: {LIGHT_GREY_BLUE, WHITE, LIGHT_GREY},
      primary: {MEDIUM_BLUE},
    },
  } = useTheme();
  if (modalVisible)
    return (
      <ModalStyle.BackDrop>
        <ModalStyle.Container>
          <ModalStyle.Header>
            <TypoGraphy weight="500" size="18">
              {title}
            </TypoGraphy>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </ModalStyle.Header>
          <ModalStyle.Main>{children}</ModalStyle.Main>
          <ModalStyle.Footer>
            {footer ? (
              footer?.map(({text, color, onClick}, index: number) => (
                <ModalStyle.Button
                  key={`modalButton-${index}`}
                  padding={'16px'}
                  borderRadius="8"
                  borderColor={color.border}
                  backgroundColor={color.background}
                  onClick={onClick}>
                  <TypoGraphy weight="500" color={color.textColor}>
                    {text}
                  </TypoGraphy>
                </ModalStyle.Button>
              ))
            ) : (
              <React.Fragment>
                <ModalStyle.Button
                  padding={'16px'}
                  borderRadius="8"
                  borderColor={LIGHT_GREY_BLUE}
                  onClick={onClose}>
                  <TypoGraphy weight="500" color={LIGHT_GREY}>
                    취소
                  </TypoGraphy>
                </ModalStyle.Button>
                <ModalStyle.Button
                  padding={'16px'}
                  borderRadius="8"
                  backgroundColor={MEDIUM_BLUE}
                  borderColor={MEDIUM_BLUE}
                  onClick={onSubmit}>
                  <TypoGraphy weight="500" color={WHITE}>
                    저장하기
                  </TypoGraphy>
                </ModalStyle.Button>
              </React.Fragment>
            )}
          </ModalStyle.Footer>
        </ModalStyle.Container>
      </ModalStyle.BackDrop>
    );
  else return null;
};

const ModalStyle = {
  BackDrop: styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
  `,
  Container: styled.div`
    min-width: 378px;
    min-height: 285px;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  `,
  Header: styled.section`
    display: flex;
    padding: 24px 24px 12px 24px;
    justify-content: space-between;
  `,
  HeaderTitle: styled.p``,
  Main: styled.section`
    padding: 12px 24px;
  `,
  Footer: styled.section`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 16px;
    padding: 12px 24px 24px 24px;
  `,
  Button: styled(Button)`
    display: flex;
    min-width: 157px;
    min-height: 48px;
    & > * {
      width: 100%;
    }
  `,
};
