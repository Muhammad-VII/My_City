export interface User {
  data: {
    name: string | null,
    email: string | null,
    phone: string | null
  }
  token: string | null
}
