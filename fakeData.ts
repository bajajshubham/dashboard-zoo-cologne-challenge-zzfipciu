import { faker } from '@faker-js/faker'
import type { Animal, Fruit, Gender } from './types'

export const AARON: Animal = {
  id: '33f38cb0-4757-42f4-92ca-0f1d7ef939ea',
  name: 'Aaron',
  species: 'dog',
  gender: 'male',
  birthdate: new Date(),
  favouriteFruit: 'cherry',
  height: 150,
  weight: 150,
}

export const fakeAnimal = (): Animal => {
  const gender = faker.helpers.arrayElement(['male', 'female']) satisfies Gender
  const favouriteFruit = faker.helpers.arrayElement(['banana', 'apple', 'cherry']) satisfies Fruit

  return {
    id: faker.string.uuid(),
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
  }
}
