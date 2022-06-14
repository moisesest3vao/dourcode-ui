import { User } from './user';
export type Auth = {
  refresh_token:string;
  token: string;
  type:string;
  user:User;
}
