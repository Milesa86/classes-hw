import attackDescription from '../attack_description';

test('тест вывода атаки с описанием', () => {
  const input = {
    name: 'Лучник',
    type: 'Bowman',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Нокаутирующий удар, с шансом оглушить противника'
      },
    ]
  };
  const expected = [
    { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Нокаутирующий удар, с шансом оглушить противника' },
  ];
  const received = attackDescription(input);
  expect(received).toEqual(expected);
});

test('тест вывода атаки со скрытым описанием', () => {
  const input = {
    name: 'Лучник',
    type: 'Bowman',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ]
  };
  const expected = [
    { id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно' },
  ];
  const received = attackDescription(input);
  expect(received).toEqual(expected);
});