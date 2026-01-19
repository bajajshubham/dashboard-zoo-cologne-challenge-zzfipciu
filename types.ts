export type Fruit = 'banana' | 'apple' | 'cherry'
export type Gender = 'male' | 'female'

export type Animal = {
  id: string
  name: string
  species: string
  gender: Gender
  birthdate: Date
  favouriteFruit: Fruit
  height: number
  weight: number
}

export type AnimalWithAgeAndRequiedFood = Animal & {
  age: number
  monthlyFoodRequired: string
}
