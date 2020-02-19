function showmoney() {
    let a;
    a = parseFloat(document.getElementById("a").value);
    let b;
    b = parseFloat(document.getElementById("c").value);
    let c;
    c = parseFloat(document.getElementById("d").value);
    let sum = (c / b) * a;
    document.getElementById("e").innerHTML ='Rasult:' + sum;
}


