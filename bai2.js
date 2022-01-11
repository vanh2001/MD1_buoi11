function kiemtraSNT() {
    let n = parseInt(prompt('Mời bạn nhập SNT: '));
    let check = true;
    for (let i = 2; i < (n-1); i++) {
        if (n%2 ==0){
            // alert('n không là số nguyên tố');
            check = false;
            break;
        }
    }
    // alert("n là số nguyên tố");
    check ? alert(n + " là số nguyên tố") : alert(n + ' không là số nguyên tố');
    // if(check==true){
    //     alert(n + " là số nguyên tố");
    // }else {
    //     alert(n + ' không là số nguyên tố');
    // }
}
function checkSNT(n) {
    let check = true;
    for (let i = 2; i < (n-1); i++) {
        if (n%2 ==0){
            // alert('n không là số nguyên tố');
            check = false;
            break;
        }
    }
    return check;
}
function demo2() {
    let x =1;
    let i = 0;
    while (x>0){
        x++;
        if (checkSNT(x)){
            document.writeln(x);
            i++;
        }
        if (i==20){
            break;
        }
    }
}
// check số nguyên chẵn
function demo1() {
    for (let i = 1; i <=10 ; i++) {
        if (i%2==0) document.writeln(i);
    }
}


