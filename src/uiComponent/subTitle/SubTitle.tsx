import { useEffect } from "react";
import { useSubtitle } from "../subTitleProvider/SubTitleProvider";

interface SubTitleProps {
  subTitle: string;
}

export default function SubTitle({ subTitle }: SubTitleProps) {
  const { setSubtitle } = useSubtitle();

  useEffect(() => {
    setSubtitle(subTitle);

    return () => setSubtitle("");
  }, [setSubtitle, subTitle]);
  return null;
}
