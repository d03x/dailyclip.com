import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useCallback } from "react";
dayjs.extend(relativeTime);
dayjs.locale("id");
export default function DateFormated({ date }: { date: string }) {
  const formated = useCallback(() => {
    return dayjs(date).subtract(2, "day").fromNow();
  }, [date]);

  return (
    <time
      className="with-tooltip"
      data-tooltip-place="bottom-start"
      data-tooltip-content={dayjs(date)
        .subtract(2, "day")
        .format("DD MMMM YYYY HH:mm")}
      dateTime={date}
    >
      {formated()}
    </time>
  );
}
