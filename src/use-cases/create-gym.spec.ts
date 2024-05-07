/* eslint-disable @typescript-eslint/ban-ts-comment */
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    // @ts-ignore
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to register a new gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await expect(gym.id).toEqual(expect.any(String))
  })
})
