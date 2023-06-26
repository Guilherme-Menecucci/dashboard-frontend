export declare namespace users_v1 {
  export interface Options {
    version: '1';
  }

  export interface Schema$Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
  }

  export interface Schema$User {
    id: string;
    name: string;
    email: string;
    password: string;
    emailVerified: Date;
    image: string;
  }

  export interface Schema$Users {
    dates: { maximum: string; minimum: string };
    page: number;
    results: Schema$User[];
    total_pages: number;
    total_results: number;
  }
}
