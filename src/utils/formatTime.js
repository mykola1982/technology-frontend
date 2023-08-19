export function formatTime(date) {
  const dateTime = new Date(date);
  const formattedTime = dateTime.toLocaleTimeString("uk-UA", { hours: false });

  return formattedTime;
}
