'use strict';

let table = document.createElement("table");
table.setAttribute("class", "table-fill");

let thead = document.createElement("thead");
let headerRow = document.createElement("tr");

let thMonth = document.createElement("th");
thMonth.setAttribute("class", "text-left");
thMonth.textContent = "Month";

let thSales = document.createElement("th");
thSales.setAttribute("class", "text-left");
thSales.textContent = "Sales";

headerRow.append(thMonth, thSales);
thead.append(headerRow);
table.append(thead);

let tbody = document.createElement("tbody");
tbody.setAttribute("class", "table-hover");

let data = [
    { month: "January", sales: "$ 50,000.00" },
    { month: "February", sales: "$ 10,000.00" },
    { month: "March", sales: "$ 85,000.00" },
    { month: "April", sales: "$ 56,000.00" },
    { month: "May", sales: "$ 98,000.00" }
];

data.forEach(item => {
    let row = document.createElement("tr");

    let tdMonth = document.createElement("td");
    tdMonth.setAttribute("class", "text-left");
    tdMonth.textContent = item.month;

    let tdSales = document.createElement("td");
    tdSales.setAttribute("class", "text-left");
    tdSales.textContent = item.sales;

    row.append(tdMonth, tdSales);
    tbody.append(row);
});

table.append(tbody);

document.querySelector(".table-title").append(table);
