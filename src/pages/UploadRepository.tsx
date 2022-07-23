import Typography from '../components/atoms/typography';
import {FormRepository} from '../components/FormRepository';

const UploadRepository = () => {
  return (
    <>
      <Typography size="13" marginBottom={10}>
        레포 업로드 페이지입니다
      </Typography>
      <FormRepository />
    </>
  );
};

export default UploadRepository;
