export interface ClientInterface {
  id: string
  name: string
  email: string | null
  phone: string | null
  company: string | null
  notes: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
