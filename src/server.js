import express from "express"
import openDB from "./configDB.mjs"
import createTable from "./controller/createTable.js"
import insertTodo from "./controller/insertTodo.js"
import deleteTodo from "./controller/deleteTodo.js"
import selectTodos from "./controller/selectTodos.js"
import selectTodo from "./controller/selectTodo.js"
import editContentTodo from "./controller/editContentTodo.js"
import editTitleTodo from "./controller/editTitleTodo.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {})

app.get("/todos", async (req, res) => {
  let todos = await selectTodos()
  res.json(todos)
})

app.get(`/todo/:id`, async (req, res) => {
  const { id } = req.params
  let todo = await selectTodo(id)
  res.json(todo)
})

app.post("/todo/create", (req, res) => {
  insertTodo(req.body)
  res.json({
    statusCode: 200
  })
})

app.delete(`/todo/delete/:id`, async (req, res) => {
  const { id } = req.params
  let todo = await deleteTodo(id)

  res.json(todo)
})
app.put(`/todo/update/content/:id`, async (req, res) => {
  const { id } = req.params

  let content = req.body.content
  let updateContent = await editContentTodo(content, id)

  res.json(updateContent)
})
app.put(`/todo/update/title/:id`, async (req, res) => {
  const { id } = req.params

  let title = req.body.title
  let updateTitle = await editTitleTodo(title, id)

  res.json(updateTitle)
})

createTable()

app.listen("3333", () => {
  console.log("🚀 Server is running, http://localhost:3333")
})
