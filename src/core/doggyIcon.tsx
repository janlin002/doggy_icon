import { useEffect } from "react";

import Icon from "../icons";
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
    primary: {
      filter:
        "invert(55%) sepia(96%) saturate(402%) hue-rotate(159deg) brightness(94%) contrast(94%)",
    },
    destructive: {
      filter:
        "invert(12%) sepia(89%) saturate(1000%) hue-rotate(300deg) brightness(89%) contrast(115%);",
    },
    safe: {
      filter:
        "invert(43%) sepia(66%) saturate(1968%) hue-rotate(67deg) brightness(88%) contrast(85%)",
    },
    warning: {
      filter:
        "invert(39%) sepia(75%) saturate(3263%) hue-rotate(6deg) brightness(94%) contrast(104%)",
    },
    info: {
      filter:
        "invert(26%) sepia(98%) saturate(1712%) hue-rotate(192deg) brightness(95%) contrast(102%)",
    },
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
    ...style,
    ...showColorType,
    ...(!style.width && { width: sizeMap[size] }),
    ...(!style.height && { height: sizeMap[size] }),
  };

  useEffect(() => {
    if (!icon) {
      console.error("icon is not defined!!!");
    }
  }, [icon]);

  return (
    <>
      <img src={Icon[icon]} style={iconStyle} />
    </>
  );
};

export default DoggyIcon;
