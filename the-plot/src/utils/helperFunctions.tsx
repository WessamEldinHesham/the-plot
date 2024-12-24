export function convertDate(date: string) {
  const dateObject = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(dateObject);

  return formattedDate;
}

export function roundedRating(num: number): number {
  if (num && num < 10 && num.toString().length > 1) {
    const roundedNum = num.toString().split(".");
    roundedNum[1] = roundedNum[1][0];
    return +roundedNum.join(".");
  }
  return num;
}
