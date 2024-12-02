export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  element: {
    symbol: string
    atomicNumber: number
  }
  strengths: string[]
  color: string
}

