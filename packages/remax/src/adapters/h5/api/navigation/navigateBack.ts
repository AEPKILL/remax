import router from 'umi/router';
import * as API from '../../../../api';

export const navigateBack: typeof API.navigateBack = params =>
  router.go(-(params.delta || 1));
