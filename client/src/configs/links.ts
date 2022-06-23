export const URL_ALL_USERS = "https://randomuser.me/api/?results=600";
export const URL_SINGLE_USER = (url: string) =>
  `https://randomuser.me/api/?seed=${url}`;
