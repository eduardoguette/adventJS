function daysToXmas(date) {
  const stringChristmas = '25 Dec, 2021';
  const dayChristmas = calculateNumberDay(stringChristmas);
  const numberDate = calculateNumberDay(date);
  const difYears = (new Date(stringChristmas).getUTCFullYear() - new Date(date).getFullYear()) * -1;
  const difTotal = numberDate * difYears;
  if (difTotal > 0) {
    return dayChristmas - calculateNumberDay('31 Dec, 2021') - numberDate;
  }
  return dayChristmas - numberDate - difTotal;
}

function calculateNumberDay(date) {
  const oneDay = 1000 * 60 * 60 * 24;
  const reqDate = new Date(date);
  const dayStart = new Date(reqDate.getFullYear(), 0, 0);
  const diff = reqDate - dayStart;
  return Math.floor(diff / oneDay);
}
