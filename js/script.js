
document.getElementById("scrollButton").addEventListener("click", function(){
    var targetSection = document.getElementById("section-ag");
    targetSection.scrollIntoView({ behavior: "smooth" });
});