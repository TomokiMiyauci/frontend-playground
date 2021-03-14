/* eslint-disable react/prop-types */
import { FC, useState, MouseEventHandler } from 'react'

type Todo = {
  done: boolean
  value: string
}

const To: FC<{
  key: string | number
  todo: Todo
  handleDone: () => any
  handleDelete: () => any
}> = ({ key, todo, handleDone, handleDelete }) => {
  return (
    <label
      className="group flex items-center justify-between bg-gray-200 rounded-md shadow p-2 cursor-pointer hover:(shadow-md bg-opacity-80) transition"
      key={key}
    >
      <span className="space-x-2">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.done}
          onChange={handleDone}
        />
        <span>{todo.value}</span>
      </span>

      <button
        onClick={handleDelete}
        className="rounded-md bg-white shadow px-2 group-hover:opacity-100 opacity-60"
      >
        ×
      </button>
    </label>
  )
}

const Todo: FC = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    if (!todo) return
    const _todos = [...todos, { value: todo, done: false }]
    setTodos(_todos)
    setTodo('')
  }

  const handleClickDelete = (index: number): void => {
    const _todos = todos.filter((_, i) => index !== i)
    setTodos(_todos)
  }

  const handleDone = (todo: Todo, done: boolean): void => {
    const _todos = todos.map((_todo) =>
      todo === _todo
        ? {
            done,
            value: todo.value
          }
        : _todo
    )
    setTodos(_todos)
  }

  const notDoneTodos = todos.filter(({ done }) => !done)
  const doneTodos = todos.filter(({ done }) => done)
  return (
    <>
      <h1 className="text-3xl p-4 bg-white shadow">Todo</h1>
      <div className="text-center  max-w-screen-xl mx-auto p-4 mt-20">
        <span className="shadow rounded-md text-3xl p-4 bg-white hover:(bg-gray-200 shadow-md) border focus-within:ring-2 duration-200">
          <input
            spellCheck="false"
            className="transition bg-transparent"
            onChange={({ target }) => setTodo(target.value)}
            value={todo}
            type="text"
            placeholder="Add new item"
          />
          <button
            className="border-l outline-none focus:outline-none"
            onClick={handleClick}
          >
            Add
          </button>
        </span>

        <div className="flex mt-10 space-x-10">
          <div className="flex-auto space-y-2">
            <h3>todo</h3>

            {notDoneTodos.map((todo, i) => (
              <To
                key={i}
                handleDone={() => handleDone(todo, true)}
                handleDelete={() => handleClickDelete(i)}
                todo={todo}
              />
            ))}
          </div>

          <div className="flex-auto space-y-2">
            <h3>done</h3>

            {doneTodos.map((todo, i) => (
              <To
                key={i}
                handleDone={() => handleDone(todo, false)}
                handleDelete={() => handleClickDelete(i)}
                todo={todo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
