export interface Item {
  id: number
  imgUrl: string
  name: string
  price: number
  sizes: number[]
  calories: number
  fat: string
  cholesterol: string
  sodium: string
  carb: string
  protein: string
  vitD: string
  calcium: string
  size?: 250 | 500 | null
  sugar?: boolean
}

export interface CartItem {
  item: Item
  size: 250 | 500;
  sugar: boolean
  count: number
}