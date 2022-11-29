// 4. Write a class to calculate uber price.

class Uber {
    constructor(
      initialFare,
      costPerMile,
      rideDistance,
      bookingFees
    ) {
      this.initialFare = initialFare;
      this.costPerMile = costPerMile;
      this.rideDistance = rideDistance;
      this.bookingFees = bookingFees;
    }
  
    getFare() {
      console.log(
        `Your fare is: ${
          this.initialFare +
          (this.costPerMile * this.rideDistance )+
          this.bookingFees
        }`
      );
    }
  }
  
  let fare = new Uber(30, 30, 5, 40);
  
  fare.getFare();