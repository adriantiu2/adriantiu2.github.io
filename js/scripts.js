function getRandomFileName(folder, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var fileList = JSON.parse(this.responseText);
            var randomIndex = Math.floor(Math.random() * fileList.length);
            callback(fileList[randomIndex]);
          }
        };
        xhr.open("GET", folder + "/file_list.json", true);
        xhr.send();
      }

      function getRandomImage() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var folderList = JSON.parse(this.responseText);
            var folder = folderList[Math.floor(Math.random() * folderList.length)];
            getRandomFileName("assets/" + folder, function(fileName) {
              var img = document.getElementById("random-image");
              img.src = "assets/" + folder + "/" + fileName;
            });
          }
        };
        xhr.open("GET", "assets/list.json", true);
        xhr.send();
      }

      function generateRandomImage() {
        getRandomImage();
      }

      window.onload = function() {
        getRandomImage();
        var button = document.getElementById("generate-image-button");
        button.addEventListener("click", generateRandomImage);
      };


var allLinks = document.getElementsByTagName('a');
for(var i = allLinks.length-1; i >=0  ; i--) {
	 (function () {
		var modal = allLinks[i].id + "_modal"
		allLinks[i].addEventListener("mouseenter", function() { 
			document.getElementById(modal).style.display = "block"; }, false)
		allLinks[i].addEventListener("mouseleave", function() { 
			document.getElementById(modal).style.display = "none"; }, false)
	}()); // immediate invocation
	}


// Get the menu button and the links div
const menuBtn = document.getElementById("menu-btn");
const links = document.getElementById("links");

// Add event listener to the menu button to toggle the links div
menuBtn.addEventListener("click", function() {
  links.classList.toggle("show");
});

