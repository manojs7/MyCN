const fs = require('fs');
const csv = require('csv-parser');

var menu = []

fs.createReadStream('menusall.csv').pipe(csv()).on('data', (data) => {
    var item = {
        id: data.id,
        city:data.city,
        menu_label: data.menu_label,
        name: data.name,
        Qtype: data.quantity,
        cuisine: data.cuisine,
        veg: data.preference === "veg",
        mealType:data.mealtype,
        meal:data.meal,
        selling_price: data.selling_price,
    }
    menu.push(item)
}).on('end', () =>
{
    JSON.stringify(menu)
    fs.writeFileSync('menu.json', JSON.stringify(menu))
});
