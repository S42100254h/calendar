import dayjs from "dayjs";

// 受け取ったpropsをdayjsインスタンスに変更
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const createCalendar = (month) => {
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

// 受け取ったdayjsインスタンスのフォーマットを変更
export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPriviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};
