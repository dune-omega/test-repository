import {
  CompassOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { run, useConcent } from "concent";
import { useParams } from "react-router-dom";
import DescriptionComp from "../../components/DescriptionComp";
import { URL_SINGLE_USER } from "../../configs/links";
import useFetchAPI from "../../hooks/useFetchAPI";

const { Title } = Typography;

run({
  foo: {
    state: {
      count: 0,
    },
    reducer: {
      increment: (payload: number, moduleState, actionCTX) => {
        actionCTX.setState({ count: moduleState.count + payload });
      },
    },
  },
});

const Profile = () => {
  const { id } = useParams();
  const { data } = useFetchAPI(URL_SINGLE_USER(id as string));
  const user = data?.results[0];

  return (
    <Row
      style={{
        fontFamily: "Poppins",
        textAlign: "center",
      }}
    >
      <Col
        span={10}
        style={{
          display: "grid",
          justifyItems: "center",
          flexDirection: "column",
        }}
      >
        <Title style={{ margin: 0, marginBlockStart: "1rem" }} level={2}>
          {user?.name.last}
        </Title>
        <Title style={{ margin: 0 }} level={2}>
          {user?.name.first}
        </Title>
        <img
          width={200}
          src={user?.picture.large}
          style={{ borderRadius: "50%" }}
          alt="profile_pic"
        />
      </Col>
      <Col span={14}>
        <DescriptionComp
          data={user?.email}
          title="Email"
          icon={<MailOutlined />}
        />
        <DescriptionComp
          data={user?.gender}
          title="Gender"
          icon={<HeartOutlined />}
        />
        <DescriptionComp
          data={`${user?.location.state},`}
          data2={user?.location.city}
          title="Location"
          icon={<CompassOutlined />}
        />
        <DescriptionComp
          data={user?.phone}
          title="Phone"
          icon={<PhoneOutlined />}
        />
      </Col>
    </Row>
  );
};

export default Profile;
