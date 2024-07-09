import iconComponents from "../icons/icon.component";
import { Size } from "../types";
import { sizeMap } from "../constants";

type Props = {
  icon: string;
  style?: any;
  size?: Size;
  colorType?: "primary" | "destructive" | "safe" | "warning" | "info";
};

const DoggyIcon = ({
  icon = "",
  style = {},
  size = "medium",
  colorType = "primary",
}: Props) => {
  const filterStyles = {
    primary: "#019CB0",
    destructive: "#D01322",
    safe: "#389E0D",
    warning: "#D48906",
    info: "#0959D9",
  };
  let showColorType;
  switch (colorType) {
    case "destructive":
      showColorType = filterStyles.destructive;
      break;
    case "safe":
      showColorType = filterStyles.safe;
      break;
    case "warning":
      showColorType = filterStyles.warning;
      break;
    case "info":
      showColorType = filterStyles.info;
      break;
    case "primary":
    default:
      showColorType = filterStyles.primary;
      break;
  }
  const iconStyle = {
    fill: showColorType,
    ...style,
    ...(!style.width && { width: sizeMap[size] }),
    ...(!style.height && { height: sizeMap[size] }),
  };

  const Icon = iconComponents[icon];
  return <>{Icon ? <Icon style={{ ...iconStyle }} /> : null}</>;
};

export default DoggyIcon;
