// Code your solution in this file!

const scuberHq = 42;

function distanceFromHqInBlocks(pickUpLocation){
    let distance = pickUpLocation > scuberHq ? pickUpLocation - scuberHq : scuberHq - pickUpLocation;
return distance;
}

function distanceFromHqInFeet(pickUpLocation){
let distance1 = distanceFromHqInBlocks(pickUpLocation);
return distance1 * 264;
}

function distanceTravelledInFeet(start, end) {
    let distanceTravelled = end > start ? end - start : start - end;
    return distanceTravelled * 264;
  }

  function  calculatesFarePrice(start, end){
    let distanceInFeet = distanceTravelledInFeet(start, end);
    if(distanceInFeet < 400){
        return 0;
    }else if(distanceInFeet > 400 && distanceInFeet < 2000){
        return (distanceInFeet-400) * 0.02
    }else if(distanceInFeet>2000){
        if (distanceInFeet>2500){
            return 'cannot travel that far'
        }
        return 25;
    }
  }