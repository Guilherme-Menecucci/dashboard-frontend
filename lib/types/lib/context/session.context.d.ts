import { Api } from '~@types/_api';

type TData = {
  authToken: string;
  session: Api.TSession;
};

type TSessionContextData = {
  data: TData;

  /**
   * @function saveSession
   * Save Session in Local Storage
   * @param session Session in JSON format
   */
  saveSession(session: Api.TSessionApi): void;

  /**
   * @function clearSession
   * Remove Session from Local Storage
   */
  clearSession(): void;
};

type TSessionProviderProps = { children: React.ReactNode };

export { TData, TSessionContextData, TSessionProviderProps };
