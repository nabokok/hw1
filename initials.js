const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.map((name) => {
    return name
    .split(" ")
    .map((item) => {
        return item[0];
    })
    .join(".");
}).sort();

console.log(initials); 