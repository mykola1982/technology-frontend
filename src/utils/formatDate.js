export function formatDate(date) {
  const dateTime = new Date(date);
  const formattedDate = dateTime.toLocaleDateString("uk-UA");
  const formattedTime = dateTime.toLocaleTimeString("uk-UA", { hours: false });

  return `${formattedDate} ${formattedTime}`;
}
