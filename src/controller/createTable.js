import openDb from "../configDB.mjs"

export default async function createTable() {
  openDb().then(db => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Todo (id INTEGER PRIMARY KEY, title TEXT, content TEXT)"
    )
  })
}


