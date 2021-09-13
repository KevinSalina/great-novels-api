'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('authors', [
      { name: 'Bram Stoker' },
      { name: 'Oscar Wilde' },
      { name: 'Alice Walker' },
      { name: 'Leo Tolstoy' },
      { name: 'Charles Dickens' },
      { name: 'Arthur Miller' },
      { name: 'Alexandre Dumas' },
      { name: 'Arthur Conan Doyle' },
      { name: 'Robert Louis Stevenson' },
      { name: 'Fyodor Dostoyevsky' },
      { name: 'Agatha Christie' },
      { name: 'Ray Bradbury' },
      { name: 'George Orwell' },
      { name: 'H.G. Wells' },
      { name: 'Chinua Achebe' }
    ])

    await queryInterface.bulkInsert('titles', [
      { name: 'Dracula', authorId: 1 },
      { name: 'The Picture of Dorian Gray', authorId: 2 },
      { name: 'The Color Purple', authorId: 3 },
      { name: 'War and Peace', authorId: 4 },
      { name: 'A Tale of Two Cities', authorId: 5 },
      { name: 'The Crucible', authorId: 6 },
      { name: 'The Three Musketeers', authorId: 7 },
      { name: 'The Hound of the Baskervilles', authorId: 8 },
      { name: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { name: 'Crime and Punishment', authorId: 10 },
      { name: 'Murder on the Orient Express', authorId: 11 },
      { name: 'Fahrenheit 451', authorId: 12 },
      { name: 'Animal Farm', authorId: 13 },
      { name: 'The Time Machine', authorId: 14 },
      { name: 'Things Fall Apart', authorId: 15 },
    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Fiction' },
      { name: 'Horror' },
      { name: 'Fantasy' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'War' },
      { name: 'Russian Literature' },
      { name: 'Drama' },
      { name: 'Plays' },
      { name: 'Adventure' },
      { name: 'French Literature' },
      { name: 'Mystery' },
      { name: 'Crime' },
      { name: 'Thriller' },
      { name: 'Science Fiction' },
      { name: 'Dystopia' },
      { name: 'Time Travel' },
      { name: 'African Literature' }
    ])

    return queryInterface.bulkInsert('titleGenres', [
      { titleId: 1, genreId: 1 },
      { titleId: 1, genreId: 2 },
      { titleId: 1, genreId: 3 },
      { titleId: 2, genreId: 1 },
      { titleId: 2, genreId: 2 },
      { titleId: 2, genreId: 4 },
      { titleId: 2, genreId: 3 },
      { titleId: 3, genreId: 1 },
      { titleId: 3, genreId: 5 },
      { titleId: 4, genreId: 1 },
      { titleId: 4, genreId: 5 },
      { titleId: 4, genreId: 6 },
      { titleId: 4, genreId: 7 },
      { titleId: 5, genreId: 1 },
      { titleId: 5, genreId: 5 },
      { titleId: 6, genreId: 1 },
      { titleId: 6, genreId: 5 },
      { titleId: 6, genreId: 8 },
      { titleId: 6, genreId: 9 },
      { titleId: 7, genreId: 1 },
      { titleId: 7, genreId: 5 },
      { titleId: 7, genreId: 10 },
      { titleId: 7, genreId: 11 },
      { titleId: 8, genreId: 1 },
      { titleId: 8, genreId: 12 },
      { titleId: 8, genreId: 13 },
      { titleId: 8, genreId: 14 },
      { titleId: 9, genreId: 1 },
      { titleId: 9, genreId: 12 },
      { titleId: 9, genreId: 15 },
      { titleId: 9, genreId: 2 },
      { titleId: 10, genreId: 1 },
      { titleId: 10, genreId: 7 },
      { titleId: 10, genreId: 12 },
      { titleId: 11, genreId: 1 },
      { titleId: 11, genreId: 12 },
      { titleId: 12, genreId: 1 },
      { titleId: 12, genreId: 15 },
      { titleId: 12, genreId: 16 },
      { titleId: 13, genreId: 1 },
      { titleId: 13, genreId: 15 },
      { titleId: 13, genreId: 16 },
      { titleId: 14, genreId: 1 },
      { titleId: 14, genreId: 15 },
      { titleId: 14, genreId: 17 },
      { titleId: 15, genreId: 1 },
      { titleId: 15, genreId: 5 },
      { titleId: 15, genreId: 18 }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('titleGenres')
    await queryInterface.bulkDelete('genres')
    await queryInterface.bulkDelete('titles')

    return queryInterface.bulkDelete('authors')
  }
}
