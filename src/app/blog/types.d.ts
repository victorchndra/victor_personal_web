export type TCategory = {
  name: string,
  slug: string,
}

export type TContent = {
  name: string,
  slug: string,
  content: string,
  thumbnail?: string,
  description?: string,
  category: {
    name: string,
    slug: string,
  },
  created_at: string,
  updated_at: string,
}