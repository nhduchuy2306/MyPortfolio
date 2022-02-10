$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const menu = $$(".item a");
var currentIndex;

menu.forEach(function(item,index) {    
    if(menu[index].classList.contains("active")) {
        currentIndex = index;
    }
    item.addEventListener("click", function() {
        item.classList.add("active");
        menu[currentIndex].classList.remove("active");
        currentIndex = index;
    });
});

var url = window.location.href;
var fnum = 0;
for(let i = url.length-1; i >= 0; i--){
	if(url[i]==='/'){
		fnum = i;
		break;
	}
}
url = url.substring(0,fnum)+"#home";
console.log(url);

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.href = url;
} 
