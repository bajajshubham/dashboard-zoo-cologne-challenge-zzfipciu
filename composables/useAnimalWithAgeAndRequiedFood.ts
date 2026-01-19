import type {AnimalWithAgeAndRequiedFood} from '~/types'

export const useAnimalWithAgeAndRequiedFood = () => {
  const AnimalWithAgeAndRequiedFood = useState('AnimalWithAgeAndRequiedFood',()=><AnimalWithAgeAndRequiedFood[]>[])
  const setAnimalWithAgeAndRequiedFood = (newAnimalWithAgeAndRequiedFood: ComputedRef) => {
    AnimalWithAgeAndRequiedFood.value = newAnimalWithAgeAndRequiedFood.value
    console.log('inside composable', AnimalWithAgeAndRequiedFood)
  }
  return {
    AnimalWithAgeAndRequiedFood,
    setAnimalWithAgeAndRequiedFood
  }
}
