$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const menu = $$(".item a");
var currentIndex;

menu.forEach(function(item,index) {    
    if(menu[index].classList.contains("active")) {
        currentIndex = index;
    }
    item.addEventListener("click", function() {
        menu[currentIndex].classList.remove("active");
        item.classList.add("active");
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

document.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop >= 0 && scrollTop < 721){
        menu[0].classList.add("active");
        menu[1].classList.remove("active");
        menu[2].classList.remove("active");
        menu[3].classList.remove("active");
        menu[4].classList.remove("active");
    }
    else if(scrollTop >= 721 && scrollTop < 1443){
        menu[0].classList.remove("active");
        menu[1].classList.add("active");
        menu[2].classList.remove("active");
        menu[3].classList.remove("active");
        menu[4].classList.remove("active");
    }
    else if(scrollTop >= 1443 && scrollTop < 2164){
        menu[0].classList.remove("active");
        menu[1].classList.remove("active");
        menu[2].classList.add("active");
        menu[3].classList.remove("active");
        menu[4].classList.remove("active");
    }
    else if(scrollTop >= 2164 && scrollTop <2886){
        menu[0].classList.remove("active");
        menu[1].classList.remove("active");
        menu[2].classList.remove("active");
        menu[3].classList.add("active");
        menu[4].classList.remove("active");
    }
    else{
        menu[0].classList.remove("active");
        menu[1].classList.remove("active");
        menu[2].classList.remove("active");
        menu[3].classList.remove("active");
        menu[4].classList.add("active");
    }
})