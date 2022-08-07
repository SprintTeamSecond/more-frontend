import styled from 'styled-components';
import {FormRepository} from 'src/components/FormRepository';

const UploadRepositoryPage = () => {
  return (
    <UploadStyle.Layout>
      <FormRepository />
    </UploadStyle.Layout>
  );
};

export default UploadRepositoryPage;

const UploadStyle = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
};
