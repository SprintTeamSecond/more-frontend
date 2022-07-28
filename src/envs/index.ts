import {variables as ENV_DEV} from './dev';
import {variables as ENV_PROD} from './prod';

let ENV: typeof ENV_PROD;

if (process.env.REACT_APP_ENV === 'development') {
  ENV = ENV_DEV;
} else {
  ENV = ENV_PROD;
}

export default ENV;
