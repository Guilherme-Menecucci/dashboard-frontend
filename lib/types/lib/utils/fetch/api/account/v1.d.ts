import { shared_v1 } from '..';

export declare namespace account_v1 {
  interface Schema$CookieSession {
    sessionToken: string;
    refreshToken: string;
    displayName: string;
    id: string;
    login: string;
  }

  export type Schema$Return = shared_v1.Schema$Return<Schema$CookieSession>;

  export interface Schema$Register {
    name: string | null;
    email: string;
    password: string;
  }

  export interface Schema$Login {
    email: string;
    password: string;
  }
}
