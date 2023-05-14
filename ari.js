var myImage=document.getElementById("mainImage");
var imageArray=["image/Students.jpg","image/Students.jpg","image/p.jpg",  "image/p.jpg"];
var imageIndex=0;
function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length){
		imageIndex=0;
	}
}
setInterval(changeImage, 3000);