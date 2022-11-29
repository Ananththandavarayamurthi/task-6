// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class movie {
//     constructor(title, studio, rating) {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     }
//   }
  
//   var movi = new movie("Casino Royale", "Eon Productions", "PG13");
//   console.log(movi);
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  
  // class movie {
  //   constructor(title, studio, rating = "PG") {
  //     this.title = title;
  //     this.studio = studio;
  //     this.rating = rating;
  //   }
  // }
  
  // var movi = new movie("Casino Royale", "Eon Productions");
  // console.log(movi);
  
  // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  // class Movie{
  //   constructor(title,studio,rating="PG"){                                                                                                                                                                             
  //   this. title=title;
  //   this. studio=studio;
  //   this. rating=rating;
  //   }
  //   getPG(movie=[]){
  //   movie=[this.title,this.studio,this.rating]   
  //   let result=[];
  //   console.log("print only films with rating PG ");
  //   if(movie[2]=="PG"){
  //   for(var i=0;i<movie.length;i++){
  //   result=result+movie[i]+"  ";
  //   }
  //   }
  //   return result;                          
  //   }
  //   }
    
  //   let movie;                                                                          
                                     
  //   let movie1= new Movie("Casino Royale","Eon Prodductions","PG13"); 
    
  //   let movie2= new Movie("kaithi","dream warrior pictures","PG");
    
  //   let movie3= new Movie("VIKRAM","red giant","PG13");
    
  //   console.log(movie1.getPG(movie));        
  //   console.log(movie2.getPG(movie));
  //   console.log(movie3.getPG(movie));
  
  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
  
//   class movie {
//     constructor(title, studio, rating) {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     }
//   }
  
//   var movie1 = new movie("Casino Royale", "Eon Productions", "PG13");
//   console.log(movie1);