import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('level up', () => {
  const zombie = new Zombie('Алеша');
  zombie.levelUp();
  expect(zombie).toEqual({
    name: 'Алеша',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('level up with zero health', () => {
  const zombie = new Zombie('Василий');
  zombie.health = 0;
  expect(() => zombie.levelUp()).toThrow('You cannot level up the dead');
});

test('damage', () => {
  const zombie = new Zombie('Алеша');
  zombie.damage(50);
  expect(zombie.health).toEqual(55);
});

test('more damage than health', () => {
  const zombie = new Zombie('Василий');
  zombie.health = 25;
  zombie.damage(50);
  expect(zombie.health).toEqual(0);
});

test.each([
  ['V'],
  ['VictorBauer'],
])('Invalid name: %s', (name) => {
  expect(() => new Character(name, 'Bowman')).toThrow('Invalid name length');
});

test('Invalid character type', () => {
  expect(() => new Character('Viktor', 'Superman', 100, 100)).toThrow('Invalid character type');
});

test('create Bowman', () => {
  expect(new Bowman('Bowman')).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('create Daemon', () => {
  expect(new Daemon('Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('create Magician', () => {
  expect(new Magician('Magician')).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('create Swordsman', () => {
  expect(new Swordsman('Swordsman')).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('create Zombie', () => {
  expect(new Zombie('Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('create Undead', () => {
  expect(new Undead('Undead')).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
