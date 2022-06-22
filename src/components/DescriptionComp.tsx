import { Space, Typography } from "antd";
import React, { ReactNode } from "react";
import { FlexStyle } from "../configs/objects";

type Props = {
  data: string | undefined;
  icon: ReactNode;
  title: string;
  data2?: string;
};
const { Text } = Typography;

const DescriptionComp = ({ icon, data, title, data2 }: Props) => {
  return (
    <Space style={FlexStyle}>
      {icon}
      <Text>
        {title}: {data}, {data2}
      </Text>
    </Space>
  );
};

export default DescriptionComp;
