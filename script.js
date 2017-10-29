var x = 1;
var y = 1;
var axisX = 0;
var axisY = 0;

/* color box item chages background color of the Grid
*/
$("#backColor").on("change", function(){
    $(".main").css("background", $(this).val());
    console.log($(this).val());
});

/* This button draws the Grid using $().html function
*/
$("#goButton").on("click", function(){
   var htmlText = "";
    $(".main").html(htmlText);
    
    axisX = $(".rowSize").val();
    axisY = $(".columnSize").val();
    
    for(i=1;i<=axisY;i++){
        htmlText+='<div class="column">';
            for(j=1;j<=axisX;j++){
                htmlText+='<div class="c'+i+'row'+j+'"></div>';              
            }
        htmlText+='</div>';
    }
    
    // consider border thickness of each div element and fitting // all divs into main grid div node
    let dimension = ((498-(2*axisX))/axisX); 
    let temp = dimension.toString() +"px";
    
  
    $(".main").html(htmlText);
    $(".main .column div").addClass("selected");
    $(".selected").css("width",temp);
    $(".selected").css("height",temp);
    
    //initializing blackstone
    x = 1; y = 1;
    $(".c1row1").css("background", "black");

});

/* Event listener of arrow keys for moving blackstone
*/
$(document).keyup(function(event){
  
    // current-grid div background color to change from black
    // to main grid's color
    $(".c"+y+"row"+x).css("background", "inherit");
   
    //up key
    if (event.which===38) {
        y = (--y<1)? 1 : y;
    }
    
    //down key
    if (event.which===40) {
        y = (++y>axisY)? axisY : y;
    }
    
    //lef key
    if (event.which===37) {
        x = (--x<1)? 1 : x;
    }
    
    //right key
    if (event.which===39) {
        x = (++x>axisX)? axisX : x;
    }
       
    // assigns background color to new div element 
    $(".c"+y+"row"+x).css("background", "black");

});

