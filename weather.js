	   
	   
	       var box1 = document.getElementById('box1');
	       var box2 = document.getElementById('box2');
	       var box3 = document.getElementById('box3');
	   
	       box1.onended = function () {
	           box2.play();
	           box1.style.opacity=0;
	           box2.style.opacity=1;
	       }
	       box2.onended = function () {
	           box3.play();
	           box2.style.opacity=0;
	           box3.style.opacity=1;
	       }
	       box3.onended = function () {
	           box1.play();
	           box3.style.opacity=0;
	           box1.style.opacity=1;
	       }
	   
	