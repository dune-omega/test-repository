import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export type DOB = { date: string; age: number };
export type ID = { name: string };
export type LOCATION = {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  country: string;
  postcode: number;
  state: string;
  street: {
    name: string;
    number: number;
  };
  timezone: {
    description: string;
    offset: string;
  };
};
export type LOGIN = {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
};
export type NAME = { title: string; first: string; last: string };
export type REGISTERED = { date: string; age: number };
export type PICTURE = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type User = {
  cell: string;
  dob: DOB;
  email: string;
  gender: string;
  id: ID;
  location: LOCATION;
  login: LOGIN;
  name: NAME;
  nat: string;
  phone: string;
  picture: PICTURE;
  registered: REGISTERED;
};
