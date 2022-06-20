import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_ALL_USERS } from "../../configs/links";
import { User } from "../../types/types";

const AddFriends = () => {
  const [users, setUsers] = useState([] as User[]);

  const fetchAllUsers = async () => {
    await axios
      .get(URL_ALL_USERS)
      .then(({ data: { results } }) => setUsers(results));
  };

  console.log(users);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return <div>AddFriends</div>;
};

export default AddFriends;
