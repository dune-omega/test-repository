import { Spin, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { columns } from "../../configs/arrays";
import { UserState } from "../../context/userContext";
import { User } from "../../types/types";

const MyTeams = () => {
  const { loading, data } = UserState();
  const navigate = useNavigate();
  const userMapped = data?.results.map((user: User) => {
    const { first, last, title } = user.name;

    return {
      ...user,
      title,
      name: first + " " + last,
    };
  });

  return (
    <>
      {loading || data?.results.length === 0 ? (
        <Spin size="large" />
      ) : (
        <Table
          rowKey="email"
          dataSource={userMapped}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(
                  `/profile/${record.name.toLowerCase().split(" ").join("-")}`
                );
              },
            };
          }}
        />
      )}
    </>
  );
};

export default MyTeams;
