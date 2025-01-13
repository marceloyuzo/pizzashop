import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Fulano',
      email: 'fulano@example.com',
      phone: '0011211121',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
