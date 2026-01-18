import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import useCalculateRequiredFood from './useCalculateRequiredFood';

import type { Animal, Fruit, Gender } from '~/types';

const createAnimal = (overrides?: Partial<Animal>): Animal => {
  const gender = faker.helpers.arrayElement([
    'male',
    'female',
  ]) satisfies Gender;
  const favouriteFruit = faker.helpers.arrayElement([
    'banana',
    'apple',
    'cherry',
  ]) satisfies Fruit;

  return {
    name: faker.person.firstName(gender),
    species: faker.animal.type(),
    birthdate: faker.date.past({ years: 25 }),
    weight: faker.number.float({
      min: 20,
      max: 250,
      multipleOf: 0.1,
    }),
    height: faker.number.float({
      min: 0.25,
      max: 4,
      multipleOf: 0.01,
    }),
    gender,
    favouriteFruit,
    ...overrides,
  };
};

describe('useCalculateRequiredFood', () => {
  it('returns 0 for fish regardless of other values', () => {
    const animal = createAnimal({ species: 'fish' });
    const age = faker.number.int({ min: 1, max: 100 });

    expect(useCalculateRequiredFood(animal, age)).toBe(0);
  });

  it('calculates basic food requirement correctly', () => {
    const animal = createAnimal({
      species: 'lion',
      height: 200,
      weight: 300,
      gender: 'female',
      favouriteFruit: 'banana',
    });

    const age = 10;
    const expected = (200 + 300) / 250;

    expect(useCalculateRequiredFood(animal, age)).toBe(expected);
  });

  it('halves food requirement if animal is older than 20 years', () => {
    const animal = createAnimal({
      species: 'lion',
      gender: 'female',
      favouriteFruit: 'banana',
      height: 100,
      weight: 150,
    });

    const age = 25;
    const base = (100 + 150) / 250;

    expect(useCalculateRequiredFood(animal, age)).toBe(base * 0.5);
  });

  it('doubles food requirement if animal is younger than 2 years', () => {
    const animal = createAnimal({
      species: 'lion',
      gender: 'female',
      favouriteFruit: 'banana',
      height: 80,
      weight: 120,
    });

    const age = 1;
    const base = (80 + 120) / 250;

    expect(useCalculateRequiredFood(animal, age)).toBe(base * 2);
  });

  it('adds 28 kg if favourite fruit is cherry, ', () => {
    const animal = createAnimal({
      species: 'lion',
      gender: 'female',
      favouriteFruit: 'cherry',
      height: 100,
      weight: 100,
    });

    const age = 5;
    const base = (100 + 100) / 250;

    expect(useCalculateRequiredFood(animal, age)).toBe(base + 28);
  });

  it('adds 20% more food if animal is male and favourite fruit is not cherry', () => {
    const animal = createAnimal({
      species: 'lion',
      gender: 'male',
      height: 100,
      weight: 100,
      favouriteFruit: 'apple',
    });

    const age = 5;
    const base = (100 + 100) / 250;

    expect(useCalculateRequiredFood(animal, age)).toBe(base * 1.2);
  });

  it('applies all modifiers together correctly', () => {
    const animal = createAnimal({
      species: 'tiger',
      gender: 'male',
      favouriteFruit: 'cherry',
      height: 200,
      weight: 300,
    });

    const age = 25;

    let expected = (200 + 300) / 250;
    expected *= 0.5;
    expected += 28;
    expected *= 1.2;

    expect(useCalculateRequiredFood(animal, age)).toBe(expected);
  });
});
