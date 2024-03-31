import { useEffect } from "react";
import Icon from "../icons";

type Props = {
  icon?: string;
  style?: any;
};

const JanIcon = ({ icon = "", style }: Props) => {
  useEffect(() => {
    if (!icon) {
      console.error("icon is not defined!!!");
    }
  }, [icon]);

  return (
    <>
      <img src={Icon[icon]} style={style} />
    </>
  );
};

export default JanIcon;
