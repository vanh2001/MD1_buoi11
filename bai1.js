let table;
table = "<table border='1' cellpadding='3'>"
for (let i = 1; i <10; i++) {
    table += "<tr>"
    for (let j = 2; j < 10; j++) {
        let result = i * j;
        table += "<td>" + j + "x" + i + "=" + result +"</td>";
    }
    table += "</tr>"
}
table += "</table>"
document.write(table);