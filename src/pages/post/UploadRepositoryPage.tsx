import styled from 'styled-components';
import {FormRepository} from '../../components/FormRepository';

const UploadRepositoryPage = () => {
  return (
    <S.Layout>
      <FormRepository />
    </S.Layout>
  );
};

export default UploadRepositoryPage;

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
};
