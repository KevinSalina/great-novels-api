CREATE DATABASE novels;

CREATE USER 'reader'@'localhost' IDENTIFIED BY 'ILoveBooks1!';

GRANT ALL ON novels.* TO 'reader'@'localhost';

USE novels;

CREATE TABLE authors (
  id INT auto_increment,
  name VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY(id)
);

CREATE TABLE titles (
  id INT auto_increment,
  name VARCHAR(255),
  authorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY(id)
);

CREATE TABLE titleGenres (
  titleId INT,
  genreId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (titleId, genreId),
  FOREIGN KEY (titleId) REFERENCES titles(id),
  FOREIGN KEY (genreId) REFERENCES genres(id)
);

INSERT INTO authors (name) VALUES ("Bram Stoker");
INSERT INTO authors (name) VALUES ("Oscar Wilde");
INSERT INTO authors (name) VALUES ("Alice Walker");
INSERT INTO authors (name) VALUES ("Leo Tolstoy");
INSERT INTO authors (name) VALUES ("Charles Dickens");
INSERT INTO authors (name) VALUES ("Arthur Miller");
INSERT INTO authors (name) VALUES ("Alexandre Dumas");
INSERT INTO authors (name) VALUES ("Arthur Conan Doyle");
INSERT INTO authors (name) VALUES ("Robert Louis Stevenson");
INSERT INTO authors (name) VALUES ("Fyodor Dostoyevsky");
INSERT INTO authors (name) VALUES ("Agatha Christie");
INSERT INTO authors (name) VALUES ("Ray Bradbury");
INSERT INTO authors (name) VALUES ("George Orwell");
INSERT INTO authors (name) VALUES ("H.G. Wells");
INSERT INTO authors (name) VALUES ("Chinua Achebe");

INSERT INTO titles (name, authorId) VALUES ("Dracula", 1);
INSERT INTO titles (name, authorId) VALUES ("The Picture of Dorian Gray", 2);
INSERT INTO titles (name, authorId) VALUES ("The Color Purple", 3);
INSERT INTO titles (name, authorId) VALUES ("War and Peace", 4);
INSERT INTO titles (name, authorId) VALUES ("A Tale of Two Cities", 5);
INSERT INTO titles (name, authorId) VALUES ("The Crucible", 6);
INSERT INTO titles (name, authorId) VALUES ("The Three Musketeers", 7);
INSERT INTO titles (name, authorId) VALUES ("The Hound of the Baskervilles", 8);
INSERT INTO titles (name, authorId) VALUES ("The Strange Case of Dr. Jekyll and Mr. Hyde", 9);
INSERT INTO titles (name, authorId) VALUES ("Crime and Punishment", 10);
INSERT INTO titles (name, authorId) VALUES ("Murder on the Orient Express", 11);
INSERT INTO titles (name, authorId) VALUES ("Fahrenheit 451", 12);
INSERT INTO titles (name, authorId) VALUES ("Animal Farm", 13);
INSERT INTO titles (name, authorId) VALUES ("The Time Machine", 14);
INSERT INTO titles (name, authorId) VALUES ("Things Fall Apart", 15);

INSERT INTO genres (name) VALUES ('Fiction');
INSERT INTO genres (name) VALUES ('Horror');
INSERT INTO genres (name) VALUES ('Fantasy');
INSERT INTO genres (name) VALUES ('Gothic');
INSERT INTO genres (name) VALUES ('Historical Fiction');
INSERT INTO genres (name) VALUES ('War');
INSERT INTO genres (name) VALUES ('Russian Literature');
INSERT INTO genres (name) VALUES ('Drama');
INSERT INTO genres (name) VALUES ('Plays');
INSERT INTO genres (name) VALUES ('Adventure');
INSERT INTO genres (name) VALUES ('French Literature');
INSERT INTO genres (name) VALUES ('Mystery');
INSERT INTO genres (name) VALUES ('Crime');
INSERT INTO genres (name) VALUES ('Thriller');
INSERT INTO genres (name) VALUES ('Science Fiction');
INSERT INTO genres (name) VALUES ('Dystopia');
INSERT INTO genres (name) VALUES ('Time Travel');
INSERT INTO genres (name) VALUES ('African Literature');

INSERT INTO titleGenre (titleId, genreId) VALUES (1, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (1, 2);
INSERT INTO titleGenre (titleId, genreId) VALUES (1, 3);
INSERT INTO titleGenre (titleId, genreId) VALUES (2, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (2, 2);
INSERT INTO titleGenre (titleId, genreId) VALUES (2, 4);
INSERT INTO titleGenre (titleId, genreId) VALUES (2, 3);
INSERT INTO titleGenre (titleId, genreId) VALUES (3, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (3, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (4, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (4, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (4, 6);
INSERT INTO titleGenre (titleId, genreId) VALUES (4, 7);
INSERT INTO titleGenre (titleId, genreId) VALUES (5, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (5, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (6, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (6, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (6, 8);
INSERT INTO titleGenre (titleId, genreId) VALUES (6, 9);
INSERT INTO titleGenre (titleId, genreId) VALUES (7, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (7, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (7, 10);
INSERT INTO titleGenre (titleId, genreId) VALUES (7, 11);
INSERT INTO titleGenre (titleId, genreId) VALUES (8, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (8, 12);
INSERT INTO titleGenre (titleId, genreId) VALUES (8, 13);
INSERT INTO titleGenre (titleId, genreId) VALUES (8, 14);
INSERT INTO titleGenre (titleId, genreId) VALUES (9, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (9, 12);
INSERT INTO titleGenre (titleId, genreId) VALUES (9, 15);
INSERT INTO titleGenre (titleId, genreId) VALUES (9, 2);
INSERT INTO titleGenre (titleId, genreId) VALUES (10, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (10, 7);
INSERT INTO titleGenre (titleId, genreId) VALUES (10, 12);
INSERT INTO titleGenre (titleId, genreId) VALUES (11, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (11, 12);
INSERT INTO titleGenre (titleId, genreId) VALUES (12, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (12, 15);
INSERT INTO titleGenre (titleId, genreId) VALUES (12, 16);
INSERT INTO titleGenre (titleId, genreId) VALUES (13, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (13, 15);
INSERT INTO titleGenre (titleId, genreId) VALUES (13, 16);
INSERT INTO titleGenre (titleId, genreId) VALUES (14, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (14, 15);
INSERT INTO titleGenre (titleId, genreId) VALUES (14, 17);
INSERT INTO titleGenre (titleId, genreId) VALUES (15, 1);
INSERT INTO titleGenre (titleId, genreId) VALUES (15, 5);
INSERT INTO titleGenre (titleId, genreId) VALUES (15, 18);