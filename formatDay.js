export const formatDay = (date) => {
  switch (true) {
    case date === 1:
      return "Monday";
    case date === 2:
      return "Tuesday";
    case date === 3:
      return "Wednesday";
    case date === 4:
      return "Thursday";
    case date === 5:
      return "Friday";
    case date === 6:
      return "Saturday";
    case date === 7:
      return "Sunday";
  }
};
