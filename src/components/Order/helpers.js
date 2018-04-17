const serializeDate = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  offset: date.getTimezoneOffset(),
});

const prependZero = key => date => ({
  ...date,
  [key]: date[key] < 10 ? `0${date[key]}` : date[key],
});

const prependGMT = date => {
  const { offset } = date;
  const gmt = offset / 60;
  const sign = Math.sign(gmt) > 0 ? '-' : '+';

  return { ...date, offset: Math.abs(gmt), offsetSign: sign };
};

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);

const convertToCivilianDate = date => compose(serializeDate, prependGMT)(date);

const doubleDigit = civialinDate =>
  compose(
    prependZero('hours'),
    prependZero('minutes'),
    prependZero('seconds'),
    prependZero('offset'),
  )(civialinDate);

const formatDate = format => date => {
  const { offset, offsetSign } = date;
  const gmtWithSign = `${offsetSign}${offset}`;

  return format
    .replace('hh', date.hours)
    .replace('mm', date.minutes)
    .replace('ss', date.seconds)
    .replace('O', gmtWithSign)
    .replace('oo', `${gmtWithSign}00`);
};

export const humanDate = date =>
  compose(convertToCivilianDate, doubleDigit, formatDate('hh:mm:ss GMToo (O)'))(date);
