import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 80,
    }}
    spin
  />
);
function Spinner() {
  return <Spin indicator={antIcon} />;
}
export default Spinner;
