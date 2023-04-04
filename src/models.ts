export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    ratting: {
        rate: number
        count: number
    }
}