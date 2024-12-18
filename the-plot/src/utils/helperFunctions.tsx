export function convertDate(date: string) {
  const dateObject = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(dateObject);

  return formattedDate;
}
