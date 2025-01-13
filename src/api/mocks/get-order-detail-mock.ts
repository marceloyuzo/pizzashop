import { http, HttpResponse } from 'msw'

import {
  GetOrdersDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Fulano',
      email: 'fulano@example.com',
      phone: '12341234',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 19000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 3000,
        product: { name: 'Pizza Mussarela' },
        quantity: 1,
      },
      {
        id: 'order-item-3',
        priceInCents: 15000,
        product: { name: 'Pizza Strogonoff' },
        quantity: 1,
      },
    ],
  })
})
