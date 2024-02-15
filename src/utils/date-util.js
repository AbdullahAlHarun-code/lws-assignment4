function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.abs(now - date);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    // If more than a week, return the specific date format
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  } else if (days > 1) {
    // If more than a day, return yesterday
    return "Yesterday";
  } else if (hours > 0) {
    // If more than an hour, return hours ago
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    // If more than a minute    , return minutes ago
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    // Otherwise, return seconds ago
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

export { timeAgo };
