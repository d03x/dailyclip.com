import { shortNumberHumanityFormat } from "@/utils";

export const ViewsFormatedCount = ({ views }: { views: number }) => {
  return <span>{shortNumberHumanityFormat(views,{
    bilion : "m",
    thousand : "rb",
    milion : "jt"
  })} views</span>;
};
export default ViewsFormatedCount;
