import type { Animal } from '~/types';

export default (animal: Animal, age: number) => {
  if (animal.species.toLowerCase() === 'fish') return 0;

  let basicFoodRequired = (animal.weight + animal.height) / 250;
  if (age > 20) {
    basicFoodRequired *= 0.5;
  }
  if (age < 2) {
    basicFoodRequired *= 2;
  }
  if (
    animal.favouriteFruit.toLowerCase() === 'cherries' ||
    animal.favouriteFruit.toLowerCase() === 'cherry'
  ) {
    basicFoodRequired += 28;
  }
  if (animal.gender.toLowerCase() === 'male') {
    basicFoodRequired *= 1.2;
  }

  return basicFoodRequired;
};
