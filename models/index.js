const Author = require('./Author')
const Title = require('./Title')
const Genre = require('./Genre')
const TitleGenre = require('./TitleGenre')

Author.hasMany(Title)
Title.belongsTo(Author)

Genre.belongsToMany(Title, { through: TitleGenre })
Title.belongsToMany(Genre, { through: TitleGenre })

module.exports = {
  Author,
  Title,
  Genre,
  TitleGenre
}
