export function filterFilmsByDirector(list, director) {
  console.log(director);
  if (!director) {
    return list;
  }
  return list.filter((element) => element.director == director);
}
export function getListOf(list, prop) {
  const resultArray = [];
  for (const element of list) {
    // console.log(element);
    const val = element[prop];
    //Store value we want somewhere
    if (!resultArray.includes(val)) resultArray.push(val);
  }
  return resultArray;
}

export function getFilmStats(list) {
  let acc_score = 0;
  // list.forEach((film) => {
  //   acc_score += film.rt_score;
  // });
  acc_score = list.reduce((acc, curr) => acc + parseInt(curr.rt_score), 0);
  const total = list.length;
  const avg_score = acc_score / total;
  let latest = 0;
  list.forEach((film) => {
    if (latest < film.release_date) {
      latest = film.release_date;
    }
  });

  return {
    avg_score,
    acc_score,
    total,
    latest,
  };
}
