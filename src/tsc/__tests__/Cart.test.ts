import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(
    2002,
    'The Avengers',
    'Мстители',
    'IMAX',
    200,
    2012,
    'США',
    'Avengers Assemble!',
    [
      'фантастика',
      'боевик',
      'фэнтези',
      'приключения'
    ],
    8220000
  )

  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

