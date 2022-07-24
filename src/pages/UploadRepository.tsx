import styled from 'styled-components';
import {FormRepository} from '../components/FormRepository';

const UploadRepository = () => {
  return (
    <S.Layout>
      <FormRepository />
    </S.Layout>
  );
};

export default UploadRepository;

const S = {
  Layout: styled.div`
    margin: 120px 0;
  `,
};
