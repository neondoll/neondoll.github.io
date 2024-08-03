const diffDate = (startingDate: string, endingDate: string | undefined = undefined) => {
  let startDate = new Date(startingDate);
  let endDate = endingDate ? new Date(endingDate) : new Date();

  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }

  const startYear = startDate.getFullYear();
  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  let dayDiff = endDate.getDate() - startDate.getDate();

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    }
    else {
      yearDiff--;
      monthDiff = 11;
    }

    dayDiff += daysInMonth[startDate.getMonth()];
  }

  return { year: yearDiff, month: monthDiff, day: dayDiff };
};

export default diffDate;
