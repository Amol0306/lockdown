
    let c= new Date("03/22/2020")
    let d = new Date();
   // document.write(d);
    
// To calculate the time difference of two dates 
var Difference_In_Time = (d.getTime() - c.getTime())+86400000; 
  
// To calculate the no. of days between two dates 
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    function cal ()
{
    let dEle = document.querySelector("#did");
    
    dEle.innerHTML= Math.round(Difference_In_Days); 

     //dEle.innerHTML= Difference_In_Time;

    


}

/*document.write("Total number of days between dates  <br>"
               + d + "<br> and <br>" 
               + c + " is: <br> " 
               + Difference_In_Days); */
