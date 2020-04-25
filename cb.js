if (localStorage.getItem("hasCodeRunBefore") === null) {
    	for(var i=0;i<10;i++)
    	{
	        localStorage.setItem('score'+i,'none');
    	}
        localStorage.setItem('difficulty','none');
        localStorage.setItem("hasCodeRunBefore", true);
    }

//for hard game
var square = document.querySelectorAll(".square");
//for easy game
var easysquare=document.querySelectorAll("#easysquare");
//hide for easy
var hidetile=document.querySelectorAll("#hidetile");
var container=document.querySelectorAll(".container");
//correct song
var correct=document.querySelectorAll(".correct");
//wrong song
var wrong=document.querySelectorAll(".wrong");
//list of best scores
var enter=document.querySelectorAll(".enter");
//list of best scores hard
var exit=document.querySelectorAll(".exit");
//best time easy
var bt=document.querySelectorAll(".bt");
// best time hard
var hbt=document.querySelectorAll(".hbt");
//easy mode
var easy=document.querySelectorAll(".easy");
//hard mode
var hard=document.querySelectorAll(".hard");
//get body
var besttime=document.querySelectorAll(".besttime");
var time=document.querySelectorAll(".time");
var timer=document.querySelectorAll("#timer");
var besttimeH=document.querySelectorAll('.besttimeH');
var countdown=document.querySelectorAll("#countdown");
var c=255;
var v;
var easyscore=document.querySelectorAll('.easyscore');
var hardscore=document.querySelectorAll('.hardscore');
var ng=document.querySelectorAll(".ng");
var watch = new Stopwatch(timer[0]);
var a=1;
//hide body
container[0].style.visibility='hidden';
ng[0].style.visibility='hidden';
time[0].style.visibility='hidden';
besttime[0].style.visibility='hidden';
timer[0].style.visibility='hidden';
bt[0].style.visibility='hidden';
easy[0].style.visibility='visible';
hard[0].style.visibility='visible';
countdown[0].style.visibility='hidden';
hbt[0].style.visibility='hidden';
easyscore[0].style.visibility='hidden';
hardscore[0].style.visibility='hidden';
besttimeH[0].style.visibility='hidden';
for(var i=0;i<5;i++)
{	if((localStorage.getItem('score'+i)!=='none'))
	{
		enter[i].textContent=timeformat(Number(localStorage.getItem('score'+i)));
	}
	if(localStorage.getItem('score'+(i+5))!=='none')
{
	exit[i].textContent=timeformat(Number(localStorage.getItem('score'+(i+5))));
}
}

	

bt[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));
hbt[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));


//easy game begins
easy[0].addEventListener("click",function(){
	localStorage.setItem('difficulty','easy');
	easy[0].style.visibility='hidden';
	hard[0].style.visibility='hidden';
	countdown[0].style.visibility='visible';
	

	for(var i=0;i<10;i++)
	{
		hidetile[i].style.visibility='hidden';
	}
	var rand=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	for( var i=19; i > 0; i--)
	{
     var j = Math.floor(Math.random() * i);
     var temp = rand[i];
    rand[i] = rand[j];
    rand[j] = temp;
}
console.log(rand);
//input random numbers
for(var i=0;i<5;i++)
{
	easysquare[i].textContent=rand[i];
	easysquare[i].style.color='green';
	easysquare[i+5].textContent=rand[i];
	easysquare[i+5].style.color='green';
}
for(var i=5;i<10;i++)
{
	easysquare[i+5].textContent=rand[i];
	easysquare[i+5].style.color='green';
	easysquare[i+10].textContent=rand[i];
	easysquare[i+10].style.color='green';
}
for(var i=10;i<15;i++)
{
	easysquare[i+10].textContent=rand[i];
	easysquare[i+10].style.color='green';
	easysquare[i+15].textContent=rand[i];
	easysquare[i+15].style.color='green';
}
for(var i=15;i<20;i++)
{
	easysquare[i+15].textContent=rand[i];
	easysquare[i+15].style.color='green';
	easysquare[i+20].textContent=rand[i];
	easysquare[i+20].style.color='green';
}
for(var i=0;i<easysquare.length;i++)
{	 v=c-5*Number(easysquare[i].textContent);
	easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
}
 var timeleft = 3;
	 
	 var downloadTimer = setInterval(function(){
  	if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  countdown[0].textContent=timeleft;
  timeleft -= 1;
}, 1000);
	 
setTimeout(function(){watch.start();
	countdown[0].style.visibility='hidden';
		container[0].style.visibility='visible';
	ng[0].style.visibility='visible';
	time[0].style.visibility='visible';
	besttime[0].style.visibility='visible';
	timer[0].style.visibility='visible';
	bt[0].style.visibility='visible';
	container[0].style.visibility='visible';
	easyscore[0].style.visibility='visible';
	hardscore[0].style.visibility='visible';

},4000);

});
function myFunction(i)
{
	if(localStorage.getItem('difficulty')==='easy')
	{
		if(((i>=0)&&(i<5))||((i>=10)&&(i<15))||((i>=20)&&(i<25))||((i>=30)&&(i<35)))
	{
		if(a<=20)
		{
			if(Number(easysquare[i].textContent)===a)
			{
			easysquare[i].textContent=a+20;
			easysquare[i+5].textContent=a+20;
			v=c-5*Number(easysquare[i].textContent);
			easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();	
			a++;
			}
			else
			{
				wrong[0].play();
			}

		}	
		else if (a<2*20)
		{
			if(Number(easysquare[i].textContent)===a)
			{
			v=c-5*Number(easysquare[i].textContent);
			easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i+5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();
			a++;
			}
			else
			{
				wrong[0].play();
			}
		}
		else if(a===2*20)
		{	
			v=c-5*Number(easysquare[i].textContent);
			easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i+5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			watch.stop();
			hs=watch.ret();
			highscoreE(hs);
			
		}
	}
	else
	{
		if(a<=20)
		{
			if(Number(easysquare[i].textContent)===a)
			{
			easysquare[i].textContent=a+20;
			easysquare[i-5].textContent=a+20;
			v=c-5*Number(easysquare[i].textContent);
			easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();	
			a++;
			}
			else
			{
				wrong[0].play();
			}

		}	
		else if (a<2*20)
		{
			if(Number(easysquare[i].textContent)===a)
			{
			v=c-5*Number(easysquare[i].textContent);
			easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i-5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();
			a++;
			}
			else
			{
				wrong[0].play();
			}
		}
		else if(a===2*20)
		{	easysquare[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			easysquare[i-5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			watch.stop();
			hs=watch.ret();
			highscoreE(hs);
			
		}
	}
}


	else if (localStorage.getItem('difficulty')==='hard') 
	{
		if(((i>=0)&&(i<5))||((i>=10)&&(i<15))||((i>=20)&&(i<25))||((i>=30)&&(i<35))||((i>=40)&&(i<45)))
	{
		if(a<=25)
		{
			if(Number(square[i].textContent)===a)
			{
			square[i].textContent=a+25;
			square[i+5].textContent=a+25;
			v=c-5*Number(square[i].textContent);
			square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();	
			a++;
			}
			else
			{
				wrong[0].play();
			}

		}	
		else if (a<50)
		{
			if(Number(square[i].textContent)===a)
			{
			v=c-5*Number(square[i].textContent);
			square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i+5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();
			a++;
			}
			else
			{
				wrong[0].play();
			}
		}
		else if(a===50)
		{	
			v=c-5*Number(square[i].textContent);
			square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i+5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i+5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			watch.stop();
			hs=watch.ret();
			highscoreH(hs);
			
		}
	}
	else
	{
		if(a<=25)
		{
			if(Number(square[i].textContent)===a)
			{
			square[i].textContent=a+25;
			square[i-5].textContent=a+25;
			v=c-5*Number(square[i].textContent);
			square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();	
			a++;
			}
			else
			{
				wrong[0].play();
			}

		}	
		else if (a<50)
		{
			if(Number(square[i].textContent)===a)
			{
			v=c-5*Number(square[i].textContent);
			square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i-5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			correct[0].play();
			a++;
			}
			else
			{
				wrong[0].play();
			}
		}
		else if(a===50)
		{	square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i-5].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
			square[i-5].style.color="rgb(" + v + "," + 0 + "," + 0 + ")";
			watch.stop();
			hs=watch.ret();
			highscoreH(hs);
			
		}
	}
	}
}

ng[0].addEventListener("click",function(){

	window.location.reload();
});
hard[0].addEventListener("click",function(){
	localStorage.setItem('difficulty','hard');
	easy[0].style.visibility='hidden';
	hard[0].style.visibility='hidden';
	countdown[0].style.visibility='visible';
	
	

	for(var i=0;i<10;i++)
	{
		hidetile[i].style.visibility='hidden';
	}
	var rand=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	for( var i=24; i > 0; i--)
	{
     var j = Math.floor(Math.random() * i);
     var temp = rand[i];
    rand[i] = rand[j];
    rand[j] = temp;
}
console.log(rand);
//input random numbers
for(var i=0;i<5;i++)
{
	square[i].textContent=rand[i];
	square[i].style.color='green';
	square[i+5].textContent=rand[i];
	square[i+5].style.color='green';
}
for(var i=5;i<10;i++)
{
	square[i+5].textContent=rand[i];
	square[i+5].style.color='green';
	square[i+10].textContent=rand[i];
	square[i+10].style.color='green';
}
for(var i=10;i<15;i++)
{
	square[i+10].textContent=rand[i];
	square[i+10].style.color='green';
	square[i+15].textContent=rand[i];
	square[i+15].style.color='green';
}
for(var i=15;i<20;i++)
{
	square[i+15].textContent=rand[i];
	square[i+15].style.color='green';
	square[i+20].textContent=rand[i];
	square[i+20].style.color='green';
}
for(var i=20;i<25;i++)
{
	square[i+20].textContent=rand[i];
	square[i+20].style.color='green';
	square[i+25].textContent=rand[i];
	square[i+25].style.color='green';
}
for(var i=0;i<square.length;i++)
{	 v=c-5*Number(square[i].textContent);
	square[i].style.backgroundColor="rgb(" + v + "," + 0 + "," + 0 + ")";
}
countdown[0].style.visibility='visible';
 var timeleft = 3;
	 
	 var downloadTimer = setInterval(function(){
  	if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  countdown[0].textContent=timeleft;
  timeleft -= 1;
}, 1000);
	 
setTimeout(function(){watch.start();
	countdown[0].style.visibility='hidden';

		container[0].style.visibility='visible';
	ng[0].style.visibility='visible';
	time[0].style.visibility='visible';
	besttime[0].style.visibility='hidden';
	timer[0].style.visibility='visible';
	bt[0].style.visibility='hidden';
	container[0].style.visibility='visible';
	hbt[0].style.visibility='visible';
	easyscore[0].style.visibility='visible';
	hardscore[0].style.visibility='visible';
	besttimeH[0].style.visibility='visible';
	for(var i=0;i<10;i++)
	{
		hidetile[i].style.visibility='visible';
	}

},4000);

});
 function highscoreE(hs)
 {
 	var i;
 	var index;
 	var srt=[];
 	for(i=0;i<5;i++)
 	{
 		if(localStorage.getItem('score'+i)==='none')
 		{
 			index=i;
 			break;
 		}
 	}
 	if(index===0)
 	{
 		localStorage.setItem('score'+0,hs);
 		bt[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));
 		enter[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));

 	}
 	else if(index<4)
 	{	index--;
 		srt[0]=hs;
 		for(var i=0;i<=index;i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+i));
 		}
 		srt.sort(function(a, b){return a-b});
 		for(var i=0;i<=index+1;i++)
 		{
 			enter[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+i,Number(srt[i]));
 		}
 		bt[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));
 	}
 	else if (index==4) 
 	{
 		index--;
 		srt[0]=hs;
 		for(var i=0;i<=index;i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+i));
 		}
 		srt.sort(function(a, b){return a-b});
 		for(var i=0;i<5;i++)
 		{
 			enter[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+i,Number(srt[i]));
 		
 		}
 		bt[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));
 	}
 	else 
 	{
 		srt[0]=hs;
 		for(var i=0;i<5;i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+i));
 		}
 			srt.sort(function(a, b){return a-b});
 		for(var i=0;i<5;i++)
 		{
 			enter[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+i,Number(srt[i]));
 		
 		}
 		bt[0].textContent=timeformat(Number(localStorage.getItem('score'+0)));
 		}



 	}

 

function timeformat(time)
{
	time = new Date(time);

    var minutes;
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if(time<=59900)
    {
      minutes=0;
    }
    else if(time>59990&&time<=119990)
    {
      minutes=1;
    }
    else if(time>119990&&time<=179990)
    {
      minutes=2;
    }
    else
    {
      minutes=3;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return  '0'+ minutes + ' : ' + seconds + ' . ' + milliseconds;
  }


function highscoreH(hs)
 {
 	var i;
 	var index;
 	var srt=[];
 	for(i=5;i<10;i++)
 	{
 		if(localStorage.getItem('score'+i)==='none')
 		{
 			index=i;
 			break;
 		}
 	}
 	if((index-5)===0)
 	{
 		localStorage.setItem('score'+5,hs);
 		hbt[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));
 		exit[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));

 	}
 	else if((index-5)<4)
 	{	index--;
 		srt[0]=hs;
 		for(var i=0;i<=(index-5);i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+(i+5)));
 		}
 		srt.sort(function(a, b){return a-b});
 		for(var i=0;i<=index-5+1;i++)
 		{
 			exit[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+(i+5),Number(srt[i]));
 		}
 		hbt[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));
 	}
 	else if ((index-5)==4) 
 	{
 		index--;
 		srt[0]=hs;
 		for(var i=0;i<=(index-5);i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+(i+5)));
 		}
 		srt.sort(function(a, b){return a-b});
 		for(var i=0;i<5;i++)
 		{
 			exit[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+(i+5),Number(srt[i]));
 		
 		}
 		hbt[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));
 	}
 	else 
 	{
 		srt[0]=hs;
 		for(var i=0;i<5;i++)
 		{
 			srt[i+1]= Number(localStorage.getItem('score'+(i+5)));
 		}
 			srt.sort(function(a, b){return a-b});
 		for(var i=0;i<5;i++)
 		{
 			exit[i].textContent=timeformat(Number(srt[i]));
 			localStorage.setItem('score'+(i+5),Number(srt[i]));
 		
 		}
 		hbt[0].textContent=timeformat(Number(localStorage.getItem('score'+5)));
 		}



 	}
    


 