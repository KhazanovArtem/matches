import SortPlayers from '../app';

test('SortPlayers sort', () => {
    const players = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'паладин', health: 35},
        {name: 'чародей', health: 83},
      ];

    const result = SortPlayers(players);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'чародей', health: 83},
        {name: 'лучник', health: 80},
        {name: 'паладин', health: 35},
        {name: 'мечник', health: 10}
    ])
});