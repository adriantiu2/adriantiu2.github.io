var allImages = document.getElementsByTagName('img');

function bigImg(x) {
	var already = x.style.height
	var len = allImages.length
	for(var i = len-1; i >= 0 ; i--) {
	  if(x.src!=allImages[i].src){
	  	allImages[i].parentNode.removeChild(allImages[i]);
	  }
	}
  if(already == "100%"){
	location.reload();
  }
  else{
  	x.style.height = "auto"
  	x.style.width = "100%"
  	x.style.marginTop = "25px";
  	// x.style.left = "10px"
  	var filename = x.src.match("[^.]+$")[0].toUpperCase()
  	var title = x.src.match("([^\/]+$)")[0].match("^[^.]*")[0]
  	var size = getFileSize(x.naturalWidth*x.naturalHeight)
  	var back = document.createElement('button')
  	back.innerHTML = "back"
  	back.style.position = "absolute";
  	back.style.top = "8px";
  	back.style.left = "8px";
  	document.getElementById('main').appendChild(back);
  	back.addEventListener ("click", function() {
	  location.reload()
	});

  	var div = document.createElement('div');
	var base = document.getElementById('blockOfStuff').innerHTML;
	base = base.replace("FORMAT","Format: " + filename) 
	base = base.replace("DIMENSIONS","Dimensions: "+x.naturalWidth+"w x "+x.naturalHeight+"h")
	base = base.replace("SIZE", "Size: " +size)
	base = base.replace("TITLE",title) 
	base = base.replace("TITLE",title) 
	base = base.replace("WIDTH",x.clientWidth) 
	base = base.replace("HEIGHT",x.clientHeight) 
	base = base.replace("RANDOM",getRandomInt(1000000000,10000000000))
	div.innerHTML = base
	document.getElementById('main').appendChild(div);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getFileSize(input) {
	if(Math.floor(input*8/1000000)==0){
		return Math.floor(input*8/10)/1000 + "K"
	} else{
		return Math.floor(input*8/100000)/100 + "M"
	}
}
