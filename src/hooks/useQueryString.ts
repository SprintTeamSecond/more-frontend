import {useLocation} from 'react-router-dom';
import QueryString from 'qs';

export const useQueryString = () => {
  const {search} = useLocation();
  return QueryString.parse(search);
};
