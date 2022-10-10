import openDb from "../configDB.mjs"

export default async function deleteTodo(id) {
  openDb().then(db => {
    db.run("DELETE FROM Todo WHERE id = ?", [id])
  })
}
