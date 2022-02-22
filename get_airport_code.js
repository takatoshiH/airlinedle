let airlineCodes = [];
let tables = document.querySelectorAll("#_HPB_TABLE_1_A_001 > tbody");
tables = Array.from(tables).pop;
tables.forEach(table => {
    Array.from(table.children).forEach(record => {
        console.log(record);
        let children = record.children;
        const airport = [children[0].textContent, children[1].textContent];
        airlineCodes.push(airport);
    });
});

console.log(airlineCodes);