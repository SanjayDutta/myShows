var contentNames = document.getElementsByClassName("card-title");
var x = document.getElementsByClassName("card-text");
for (i in x) {
    var text = x[i].innerHTML;
    if (text) {
        var count = text.length;
        var n = eval(+i + 1);
        if (count > 200) {
            x[i].innerHTML = text.substr(0, 200) + ' ...';
        }
    }
}










function searchRecommendation() {
    var userContentValue = document.getElementById("myInput").value;
    if (userContentValue.length > 0) {
        let result = [...contentNames].every(myfunction);
        //console.log(result);
        function myfunction(item, index) {
            let userContentLower = userContentValue.toLowerCase();
            let itemLower = item.innerHTML.toLowerCase();
            let result = itemLower.startsWith(userContentLower.slice(0, Math.max(itemLower.length - 1, 1)));
            if (result) {
                document.getElementById("suggestBox").style.display = "block";
                document.getElementById("suggestBox").innerHTML = item.innerHTML;
                return false;
            }
            else {
                //document.getElementById("suggestBox").innerHTML = "Not Available";
                document.getElementById("suggestBox").style.display = "none";
                return true;
            }
        }
    }
    else {
        document.getElementById("suggestBox").style.display = "none";

    }
}

