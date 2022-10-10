import openDb from "../configDB.mjs"

export default async function selectTodos() {
  return openDb().then(db => {
    return db.all("SELECT * FROM Todo")
    .then(res => res)
  })
}