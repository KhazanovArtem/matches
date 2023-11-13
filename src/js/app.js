export default function SortPlayers(array) {
    return array.sort((a, b) => a.health < b.health ? 1 : -1);
}

console.log(SortPlayers([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'паладин', health: 35},
    {name: 'чародей', health: 83},
  ]));