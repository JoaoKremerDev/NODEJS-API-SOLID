import { Gym } from '@prisma/client'

export interface GymsRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any
  findById(id: string): Promise<Gym | null>
}
