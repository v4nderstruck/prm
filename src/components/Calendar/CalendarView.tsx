import { faker } from "@faker-js/faker";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ActivityCalendar, { Activity } from "react-activity-calendar";
import { MdOutlinePostAdd } from "react-icons/md";


type ActivityStacked = {
  id: number;
  count: number;
  level: number;
  date: string;
}

function fakeActivityStacked() {
  function dateFromDay(year: number, day: number) {
    var date = new Date(year, 0);
    return new Date(date.setDate(day));
  }
  let activityStacked: ActivityStacked[] = [];
  for (let i = 0; i < 361; i++) {
    let date = dateFromDay(2023, i).toISOString().substr(0, 10);
    activityStacked.push({
      id: i,
      count: Math.floor(Math.random() * 10),
      level: Math.floor(Math.random() * 4),
      date: date
    })
  }
  return activityStacked;
}


export default function CalendarView() {
  const { theme } = useTheme();
  const [data, setData] = useState<ActivityStacked[]>([]);
  useEffect(() => setData(fakeActivityStacked()), []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <ActivityCalendar
          theme={{
            dark: ['#e1e1e3', '#661AE6'],
            light: ['#e1e1e3', '#570DF8'],
          }}
          colorScheme={theme === "light" ? "light" : "dark"}
          blockMargin={4}
          weekStart={1}
          showWeekdayLabels
          data={data as Activity[]} />
        <button
          data-tip="Add a new event"
          className="btn btn-primary flex justify-center
          w-20 text-xl tooltip tooltip-info tooltip-right">
          <MdOutlinePostAdd />
        </button>
      </div>
    </div>
  )
}
