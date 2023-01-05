const getSleepHours = day => {
  switch(day) {
    case 'monday':
        return 6
        break;
    case 'tuesday':
        return 6
        break;
    case 'wednesday':
        return 6
        break;
    case 'thursday':
        return 6
        break;
    case 'friday':
        return 6
        break;
    case 'saturday':
        return 6
        break;
    case 'sunday':
        return 6
        break;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (dailyHours) => {
  return dailyHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep!';
  } else if (actualSleepHours < idealSleepHours) {
    let deficit = idealSleepHours - actualSleepHours;
    return `You slept less than your ideal amount. You owe ${deficit} hour(s) of sleep!`;
  } else {
    let excess = actualSleepHours - idealSleepHours;
    return `Great job! You slept ${excess} hour(s) more than your ideal amount!`
  }
}

console.log(calculateSleepDebt());