import {ParsedQs} from 'qs';

export type getAccessTokenParams = {
  client_id: string;
  client_secret: string;
  code: string | ParsedQs | string[] | ParsedQs[] | undefined;
  redirect_uri?: string;
};
