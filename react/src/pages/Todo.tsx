import { FC, useState, MouseEventHandler } from 'react'

const Todo: FC = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleClick: MouseEventHandler<HTMLInputElement> = (): void => {
    if (!todo) return
    const _todos = [...todos, todo]
    setTodos(_todos)
    setTodo('')
  }
  return (
    <>
      <h1 className="text-3xl p-4 bg-white shadow">Todo</h1>
      <div className="text-center p-4 mt-20">
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

        {todos.length && (
          <ol className="text-left bg-white hover:(shadow-md) shadow mt-10 p-2 rounded-md max-w-96 mx-auto">
            {todos.map((todo, i) => (
              <li key={i}>{todo}</li>
            ))}
          </ol>
        )}
      </div>
    </>
  )
}

export default Todo
