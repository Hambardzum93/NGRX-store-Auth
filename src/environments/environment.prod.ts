import {Environment} from './environment.interface';

export const environment: Environment = {
  production: true,
  fbUrl: `https://ngrx-store-authentication-default-rtdb.europe-west1.firebasedatabase.app`,
  postEndPoint: '/posts.json'
};
