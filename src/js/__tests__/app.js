import HealthBar from '../app';

test('healthy healthbar', () => {
    const player = {name: 'Маг', health: 90};

    const result = HealthBar(player);
    expect(result).toBe('healthy');
});

test('wounded healthbar', () => {
    const player = {name: 'Маг', health: 45};

    const result = HealthBar(player);
    expect(result).toBe('wounded');
});

test('critical healthbar', () => {
    const player = {name: 'Маг', health: 10};

    const result = HealthBar(player);
    expect(result).toBe('critical');
});