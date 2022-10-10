import openDb from "../configDB.mjs";

export default async function selectTodo(id) {
  return openDb().then(db => {
    return db.get("SELECT * FROM Todo WHERE id=?", [id])
    .then(res => res)
  })
}