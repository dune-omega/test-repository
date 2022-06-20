import { MenuItem } from "../types/types";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getItem } from "./functions";

export const items: MenuItem[] = [
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
  getItem("Tasks", "tasks", <DesktopOutlined />),
  getItem("Social", "social", <UserOutlined />, [
    getItem("My Profile", "profile"),
    getItem("Friends", "friends"),
    getItem("Add Friends", "add-friends"),
  ]),
  getItem("Teams", "teams", <TeamOutlined />, [
    getItem("My Teams", "my-teams"),
    getItem("Other Tems", "other-teams"),
  ]),
  getItem("Files", "files", <FileOutlined />),
];
