import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Gadjet from '../domain/Gadjet';


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
    8220000, 
    1
  )

  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

test('calculation buy sum', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));

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
    8220000, 
    1
  ));

  const buySum = 2000 + 900 + 200

  expect(cart.sum()).toBe(buySum);

});

test('calculation buy sum with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));

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
    8220000, 
    1
  ));

  const amountWithAFiftyPercentDiscount = (2000 + 900 + 200) / 2;

  expect(cart.discountSum(50)).toBe(amountWithAFiftyPercentDiscount);

});

test('delete item from cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));

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
    8220000, 
    1
  ));

  expect(cart.items.length).toBe(3);
  
  cart.deleteItem(1001);

  expect(cart.items.length).toBe(2);

});

test('add 3 gadjets to cart( amount will be 3, cart length will be 1) ', () => {
  const cart = new Cart();

  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));
  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));
  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));

  expect(cart.items[0].amount).toBe(3);
  expect(cart.items.length).toBe(1);
});

test('add 3 movie and book (length cart will be 2, and each item will be amount 1)', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 1));


  expect(cart.items[0].amount).toBe(1);
  expect(cart.items[1].amount).toBe(1);
  expect(cart.items.length).toBe(2);
});

test('gadjet will not delete from cart while amount >= 1', () => {
  const cart = new Cart();

  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));
  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));
  cart.deleteItem(3333);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual(new Gadjet(3333, 'iphone4', 10000, 1));
});

test('gadjet will delete if amount == 0', () => {
  const cart = new Cart();

  cart.add(new Gadjet(3333, 'iphone4', 10000, 1));
  cart.deleteItem(3333);

  expect(cart.items.length).toBe(0);
  expect(cart.items[0]).not.toEqual(new Gadjet(3333, 'iphone4', 10000, 1));
});



