import openDb from "../configDB.mjs";

export default async function insertTodo(data) {
  openDb().then(db => {
    db.run("INSERT INTO Todo (title, content) VALUES (?,?)", [
      data.title,
      data.content
    ])
  })
}
