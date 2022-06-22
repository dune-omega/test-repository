import {
  CompassOutlined,
  GiftOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import { useParams } from "react-router-dom";
import DescriptionComp from "../../components/DescriptionComp";
import { URL_SINGLE_USER } from "../../configs/links";
import { FlexStyle } from "../../configs/objects";
import useFetchAPI from "../../hooks/useFetchAPI";

const { Title, Text } = Typography;

const Profile = () => {
  const { id } = useParams();
  const { data } = useFetchAPI(URL_SINGLE_USER(id as string));
  const user = data?.results[0];

  console.log(user);

  return (
    <Row
      style={{
        fontFamily: "Poppins",
        textAlign: "center",
        textTransform: "capitalize",
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
        <img
          width={200}
          src={user?.picture.large}
          style={{ borderRadius: "50%" }}
          alt="profile_pic"
        />
        <Title style={{ margin: 0, marginBlockStart: "1rem" }} level={2}>
          {user?.name.last}
        </Title>
        <Title style={{ margin: 0 }} level={2}>
          {user?.name.first}
        </Title>
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
          data={user?.location.state}
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
