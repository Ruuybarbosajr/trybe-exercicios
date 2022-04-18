const calcSpeed = (distance, time) => {
  const convertKM = distance * 1000;
  const convertMIN = time * 60;

  return `${Math.round(convertKM / convertMIN)} KM`;
}

console.log(calcSpeed(100, 25));