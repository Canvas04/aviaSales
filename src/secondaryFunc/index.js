
// const cheapTickets = exampleObj.sort((a, b) => {
//   return a.price - b.price;
// });
// const viewCheapTickets = cheapTickets.slice(0, 20);

// //Самый быстрый
// const speedTickets = exampleObj.sort((a, b) => {
//   return (
//     a.segments.reduce((acc, current) => acc.duration + current.duration) -
//     b.segments.reduce((acc, current) => acc.duration + current.duration)
//   );
// });
// const viewSpeedTickets = speedTickets.slice(0, 20);
//Функция фильтр в зависимости от цены
const filterOnPrice = (arr) => {
  const copyArr = arr.slice();
  return copyArr.sort((a, b) => {
    return a.price - b.price;
  });
};
//Функция фильтр в зависимости от скорости

const filterOnSpeed = (arr) => {
  const copyArr = arr.slice();
  return copyArr.sort((a, b) => {
    return (
      a.segments.reduce((acc, current) => acc.duration + current.duration) -
      b.segments.reduce((acc, current) => acc.duration + current.duration)
    );
  });
}
// Функция фильтрует длину массива
export const filterOnLength = (arr) => {
  if(arr.length > 20) {
    return arr.slice(0,20)
  }
  return arr;
}

// Функция фильтр в зависимости от количества пересадок
export const filterOnStops = (arr, num) => {
  const noStops = arr.filter((el) => {
    const { segments } = el;
    const stops = segments.reduce(
      (acc, current) => acc.stops.length + current.stops.length
    );
    if (stops === num) return el;
  });
};

