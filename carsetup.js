var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width/2;

//Select the following Elements using the querySelector function

	var carWidth;
	
	function carWidth() 
	{
		document.querySelector("carWidth");
		
	}
	
	var wheelDistance;
	
	function wheelDistance()
	{
		document.querySelector("wheelDistance");
		
	}

	var roofSlider;

	function roofSlider() 
	{
		document.querySelector("roofSlider");
		
	}
		
		
	var ftSlider;
	
	function ftSlider() 
	{
		document.querySelector("ftSlider");
		
	}

	var rtSlider;
	function rtSlider() 
	{
		document.querySelector("rtSlider");
		
	}

	var rearSlider;
	function rearSlider() 
	{
		document.querySelector("rearSlider");
		
	}

	var frontSlider;
	function frontSlider() 
	{
		document.querySelector("frontSlider");
		
	}

	var colorInput;
	function colorInput() 
	{
		document.querySelector("colorInput");
		
	}

	var sponsored;
	function sponsored() 
	{
		document.querySelector("sponsored");
		
	}

	var sponsorNameBox;
	function sponsorNameBox() 
	{
		document.querySelector("sponsorNameBox");
		
	}


console.log(protocar);

/*	
	Create a new object called "car" in object literal notation. Give it all the properties and values of the protocar. 
	Please note that the rt (rear tire), ft (front tire) and sponsor properties are child objects.
	
*/
var car = new car;

function car(sponsorNameBox,sponsored,colorInput,frontSlider,rearSlider,rtSlider,ftSlider,roofSlider,wheelDistance,carWidth)
{
this.sponsorNameBox = box;
this.sponsored = sponsored;
this.colorInput = color;
this.frontSlider = front;
this.rearSlider = rear;
this.rtSlider = rt;
this.ftSlider = ft;
this.roofSlider = roof;
this.wheelDistance = distance;
this.carWidth = width;
}
function Car()
{
	
};


var timer = setInterval(animate, 1000/60);

function animate()
{
		ctx.clearRect(0,0,c.width,c.height);
		
        //call the drawCar() function and pass it your car object
		//function that draws a car using the car object's properties
		drawCar(car1);
		drawCar(car2);
		
}
function drawCar(car)
{
	
	
	ctx.fillRect(car.x,car.y, car.width, car.height);
	
}

		//Assign the colorInput's value to the car's color property
	car.colorInput = 'color';	
		//convert the roofSlider's value to a number and assign it to the car's roof property
    car.roofSlider = 'roof';   
		//convert the frontSlider's value to a number and assign it to the car's front property
    car.frontSlider = 'front';   
		//convert the rearSlider's value to a number and assign it to the car's rear property
    car.rearSlider = 'rear';
		//convert the carWidth's value to a number and assign it to the car's width property
    car.carWidth = 'width';  
		//set the roof, front and rear sliders' .max attributes to the car's topLimit property
    function maxValues()
	{
		var roofSlider = document.getElementById("roofmax").max = "20";
		var frontSlider = document.getElementById("frontmax").max = "20";
		var rearSlider = document.getElementById("rearmax").max = "20";
			
	}
		//set the car's front and rear tires' radius properties equal to the ft and rt slider's values
		
		
		
	//?need help
		
		//create a variable called wd and assign the wheelDistance slider's value to it as a Number.
	var wd = wheelDistance = 20;	
		//set the car's front tire's x property equal to the center plus wd.
		
		
		//?need help
	function()
	{
		
		car.frontSlider(car.x);
		
	}	
		//set the car's rear tire's x property equal to the center minus wd.
		
  
		
		/*
		
		Use a conditional statement (if else) to determine whether the sponsored input is checked or not.
	
		if it is checked do the following:
			1. enable the sponsorNameBox
			2. set the car's sponsor decal to true
			3. set the car's sponsor name to the value of the sponsorNameBox
		else
			1. disable the sponsorNameBox
			2. set the car's sponsor decal to false
		
		*/
		var sponsor = i;
		var sponsorNameBox = x;
		
		if (i <= )
		{
			for
			Car.prototype.run = function(){
                return true;
            };
			
		}
		else( i >=)
		{
			
			
			
		}
	
		
     

