import { FC, ReactNode } from 'react'
import favicon from '@/favicon.svg'
import logo from '@/logo.svg'
import { Link } from 'react-router-dom'

const Default: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-0 flex-col items-end justify-around w-72 shadow overflow-hidden relative bg-gray-900">
        <nav>
          <div className="p-4 border-b border-gray-600">
            <h2 className="text-3xl  font-bold capitalize">
              <span className="text-blue-400">react </span>
              <span className="text-gray-50">playground</span>
            </h2>
          </div>

          <div className="p-4">
            <Link
              className="px-4 py-1 text-white flex text-xl hover:bg-opacity-80 bg-green-400 transition rounded-md shadow capitalize no-underline w-full"
              to="/todo"
            >
              todo
            </Link>
          </div>
        </nav>
        <button className="absolute focus:outline-none hover:(shadow-md bg-opacity-80) bg-gray-900 bottom-2 left-2 w-16 h-16 shadow border rounded-md">
          <img src={logo} />
        </button>
        <img className="absolute -mr-30 right-0 bottom-0" src={favicon} />
      </div>
      <div className="flex-1 relative">
        <img
          className=" w-96 inset-0 animate-spin-slow m-auto absolute"
          src={logo}
        />
        <main className="bg-gray-100 h-full">{children}</main>
      </div>
    </div>
  )
}

export default Default
