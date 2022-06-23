import axios from "axios";
import { URL_ALL_USERS } from "./links";

export const UserConfig = {
  User: {
    state: {},
    computed: {
      async getUsers(newState: any) {
        await axios
          .get(URL_ALL_USERS)
          .then(({ data: { results } }) => newState);
      },
    },
  },
};
