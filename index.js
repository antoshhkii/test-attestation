import _ from 'lodash'

export default function solution(content){
  // FIRST BEGIN
  const rows = content.split('\n');
  const data = rows
  .slice(1, -1)
  .map((row) => row.split(',').slice(0, 18)
  .map((el) => el.trim()))
  console.log(`Count: ${data.length}`);
  // SECOND BEGIN
  const allCities = data.map((el) => el[7])
  const fuckCities = allCities.sort();  
  const uniqueCities = _.uniq(fuckCities);
  console.log(`Cities: ${uniqueCities.join(', ')}`);
  // THIRD BEGIN
  const humidity = data
  .map((el) => el[3])
  .map((el) => parseInt(el, 10))
  const min = Math.min(...humidity);
  const max = Math.max(...humidity);
  console.log(`Humidity: Min: ${String(min)}, Max: ${String(max)}`);
  //FOURTH BEGIN
  const maxTempratures = data
  .map((el) => el[1])
  .map((el) => parseInt(el, 10));
  const dates = data.map((el) => el[0])
  const index = maxTempratures.indexOf(Math.max(...maxTempratures));
  const date = dates[index];
  const city = allCities[index];
  console.log(`HottestDay: ${date} ${city}`);
  //FIFTH BEGIN
  const temps = data.reduce((acc, value) => {
  const city = value;
    if (acc[city[7]]) {
      acc[city[7]].push(city[1]);
      return acc;
    }
    acc[city[7]] = [city[1]];
    return acc;
  }, {});
  const averageTemps = Object.entries(temps).map((item) => 
    [item[0], item[1].reduce((acc, value) => Number(value) + acc, 0) / item.length]);
  const maxAverageTemp = [...averageTemps].sort((a, b) => b[1] - a[1]);
  console.log(`HottestCity: ${maxAverageTemp[0][0]}`);

  console.log(content)

    // END

}
