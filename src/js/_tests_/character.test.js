
import { Character, Bowerman, Swordsman, Magician, Undead, Zombie, Daemon } from '../character'

test('name of Character throw error', () => {
    expect(() => new Character('a', 'Swordsman')).toThrow('Неправильное имя персонажа');
    expect(() => new Character('слишкомдлинноеимя', 'Swordsman')).toThrow('Неправильное имя персонажа');
    expect(() => new Character(123, 'Swordsman')).toThrow('Неправильное имя персонажа');
})

test('type of Character throw error', () => {
    expect(() => new Character('Valid', 'Invalidtype')).toThrow('Несуществующий тип');
}) 

test('new Character with valid parameters', () => {
    const character = new Character('Valid', 'Swordsman');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
})

test('new Bowerman with correct parameters', () => {
    const character = new Bowerman('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Bowerman');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
})

test('new Swordsman with correct parameters', () => {
    const character = new Swordsman('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Swordsman');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
})

test('new Magician with correct parameters', () => {
    const character = new Magician('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Magician');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
})

test('new Daemon with correct parameters', () => {
    const character = new Daemon('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Daemon');
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
})

test('new Undead with correct parameters', () => {
    const character = new Undead('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Undead');
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
})

test('new Zombie with correct parameters', () => {
    const character = new Zombie('Valid');
    expect(character.name).toBe('Valid');
    expect(character.type).toBe('Zombie');
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
})

test('Character levelUp', () => {
    const character = new Swordsman('Valid', 'Swordsman');
    character.levelUp();
    expect(character.health).toBe(100);
    expect(character.level).toBe(2);
    expect(character.attack).toBe(48);
    expect(character.defence).toBe(12);
})

test('level up dead Character', () => {
    const character = new Swordsman('Valid', 'Swordsman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('нельзя повысить левел умершего')
})

test('Character damage', () => {
    const character = new Swordsman('Valid', 'Swordsman');
    character.damage(20);
    expect(character.health).toBe(82);
})

test('health is zero if damage is too high', () => {
    const character = new Swordsman('Valid', 'Swordsman');
    character.damage(2000);
    expect(character.health).toBe(0);
})

test('points of damage is zero if damage is negative', () => {
    const character = new Swordsman('Valid', 'Swordsman');
    character.damage(2000);
    expect(character.health).toBe(0);
})








