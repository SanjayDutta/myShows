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