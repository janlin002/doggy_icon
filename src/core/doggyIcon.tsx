import { useEffect } from "react";

import Icon from "../icons";
import { Size } from "../types";
import { sizeMap } from "../constants";

type Props = {
  icon: string;
  style?: any;
  size?: Size;
};

const DoggyIcon = ({ icon = "", style = {}, size = "medium" }: Props) => {
  const iconStyle = {
    ...style,
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
