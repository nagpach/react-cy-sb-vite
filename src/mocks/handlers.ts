import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Leanne Graham1' },
        { id: 2, name: 'Ervin Howell2' },
        { id: 3, name: 'Clementine Bauch' },
        { id: 4, name: 'Patricia Lebsack' },
        { id: 5, name: 'Chelsey Dietrich' },
        { id: 6, name: 'Mrs. Dennis Schulist' },
        { id: 7, name: 'Kurtis Weissnat' },
        { id: 8, name: 'Nicholas Runolfsdottir V' },
        { id: 9, name: 'Glenna Reichert' },
        { id: 10, name: 'Clementina DuBuque' },
      ])
    )
  }),
]