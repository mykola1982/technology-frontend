export function formatDate(date) {
  const dateTime = new Date(date);
  const formattedDate = dateTime.toLocaleDateString("uk-UA");

  return formattedDate;
}
