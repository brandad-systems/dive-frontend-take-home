export interface ServerResponse {
  product: {
    id: number,
    image?: File,
    titel: string,
    description: string,
    category: string,
    status: string,
    price?: number
  }
}
