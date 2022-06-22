import { createContext, ReactNode, useContext } from "react";
import { URL_ALL_USERS } from "../configs/links";
import useFetchAPI from "../hooks/useFetchAPI";
import { User } from "../types/types";

type Context = {
  children: ReactNode;
};

export interface TUserContext {
  data: { results: User[] } | null;
  loading: boolean;
  error: boolean | null;
}

const UserIAppInterface = createContext({} as TUserContext);

export const UserContext = ({ children }: Context) => {
  const { data, loading, error } = useFetchAPI(URL_ALL_USERS);

  return (
    <UserIAppInterface.Provider value={{ data, loading, error }}>
      {children}
    </UserIAppInterface.Provider>
  );
};

export const UserState = () => useContext(UserIAppInterface);
