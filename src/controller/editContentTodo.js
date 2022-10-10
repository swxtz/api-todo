import openDb from "../configDB.mjs";

export default async function editContentTodo(content, id) {
  return openDb().then( db => {
    return db.run("UPDATE Todo SET content=? WHERE id=?", [content, id])
  })
}