/* eslint-disable @typescript-eslint/ban-ts-comment */
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Check-ins', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    // @ts-ignore
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Javascript Gym',
      description: 'null',
      phone: null,
      latitude: -27.2092952,
      longitude: -49.6401091,
    })
    await gymsRepository.create({
      title: 'TypeScript Gym',
      description: 'null',
      phone: null,
      latitude: -27.2092952,
      longitude: -49.6401091,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Javascript Gym' })])
  })

  //   it('should be able to fetch paginated gyms list', async () => {
  //     for (let i = 1; i <= 22; i++) {
  //       await gymsRepository.create({
  //         title: `JavaScript Gym ${i}`,
  //         description: 'null',
  //         phone: null,
  //         latitude: -27.2092952,
  //         longitude: -49.6401091,
  //       })
  //     }

  //     const { gyms } = await sut.execute({
  //       query: 'JavaScript',
  //       page: 2,
  //     })

  //     expect(gyms).toHaveLength(2)
  //     expect(gyms).toEqual([
  //       expect.objectContaining({ title: 'JavaScript Gym 21' }),
  //       expect.objectContaining({ title: 'JavaScript Gym 22' }),
  //     ])
  //   })
})
