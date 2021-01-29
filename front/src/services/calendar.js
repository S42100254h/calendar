import dayjs from "dayjs";

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

const createCalendar = (month) => {
  // 今月の最初の日を追加
  const firstDay = getMonth(month);
  // 最初の日の曜日のindexを取得
  const firstDayIndex = firstDay.day();

  return Array(35).fill(0).map((_, i) => {
    const diffFromDay = i - firstDayIndex;
    const day = firstDay.add(diffFromDay, "day");
    return day;
  });
};

export default createCalendar;
