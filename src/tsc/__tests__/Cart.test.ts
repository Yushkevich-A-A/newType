import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';


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

test('calculation buy sum', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  cart.add(new Movie(
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
  ));

  const buySum = 2000 + 900 + 200

  expect(cart.sum()).toBe(buySum);

});

test('calculation buy sum with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  cart.add(new Movie(
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
  ));

  const amountWithAFiftyPercentDiscount = (2000 + 900 + 200) / 2;

  expect(cart.discountSum(50)).toBe(amountWithAFiftyPercentDiscount);

});

test('delete item from cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  cart.add(new Movie(
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
  ));

  expect(cart.items.length).toBe(3);
  
  cart.deleteItem(1001);

  expect(cart.items.length).toBe(2);

});

