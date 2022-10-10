import openDb from "../configDB.mjs"

export default async function editTitleTodo(title, id) {
  return openDb().then( db => {
    return db.run("UPDATE Todo SET title=? WHERE id=?", [title, id])
  })
}