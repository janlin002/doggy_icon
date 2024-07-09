import iconComponents from "../icons/icon.component";
import { Size } from "../types";
import { sizeMap } from "../constants";

type Props = {
  icon: string;
  style?: any;
  size?: Size;
  color?: string;
};

const DoggyIcon = ({
  icon = "",
  style = {},
  size = "medium",
  color = "#06ADBE"
}: Props) => {
  const iconStyle = {
    fill: color,
    ...style,
    ...(!style.width && { width: sizeMap[size] }),
    ...(!style.height && { height: sizeMap[size] }),
  };

  const Icon = iconComponents[icon];
  return <>{Icon ? <Icon style={{ ...iconStyle }} /> : null}</>;
};

export default DoggyIcon;
