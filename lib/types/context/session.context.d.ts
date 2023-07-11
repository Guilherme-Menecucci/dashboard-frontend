import { account_v1 } from '~@types/utils/fetch/api/account/v1';

type TData = {
  refreshToken: string;
  session: Api.TSession;
};

type TSessionContextData = {
  data: TData;

  /**
   * @function saveUser
   * Save User in Local Storage
   * @param user User object to save on session
   */
  saveUser(user: account_v1.Schema$CookieSession): void;

  /**
   * @function clearUser
   * Remove User from Local Storage
   */
  clearUser(): Promise<void>;
};

type TSessionProviderProps = { children: React.ReactNode; cookieStore: { [x: string]: string } };

export { TData, TSessionContextData, TSessionProviderProps };
