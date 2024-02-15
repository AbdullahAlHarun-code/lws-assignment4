function shortenText(text, limit) {
  if (text) {
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + "...";
    }
  } else {
    return "";
  }
}

export { shortenText };
