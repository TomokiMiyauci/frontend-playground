import { FC, ReactNode } from 'react'
import favicon from '@/favicon.svg'
import logo from '@/logo.svg'
import { NavLink } from 'react-router-dom'
import vue from '@/assets/svgs/vue.svg'

const Default: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-0 flex flex-col justify-between w-72 shadow overflow-hidden relative bg-gray-900">
        <nav>
          <div className="p-4 border-b border-gray-600">
            <h2 className="text-3xl  font-bold capitalize">
              <span className="text-blue-400">react </span>
              <span className="text-gray-50">playground</span>
            </h2>
          </div>

          <div className="p-4">
            <NavLink
              className="px-4 py-2 text-white flex text-2xl hover:bg-opacity-80 hover:bg-blue-400 transition rounded-md shadow capitalize no-underline w-full"
              activeClassName="bg-blue-500"
              to="/todo"
            >
              todo
            </NavLink>
          </div>
        </nav>
        <img className="absolute -mr-30 right-0 bottom-0" src={favicon} />

        <div className="space-y-2">
          <a
            href="vue3"
            className="w-16 rounded-md bg-gray-900 hover:(bg-opacity-80 bg-gray-700) transition flex items-center justify-center border h-16"
          >
            <img className="w-10 h-10" src={vue} />
          </a>

          <button className="focus:outline-none hover:(shadow-md bg-opacity-80) bg-gray-900 bottom-2 left-2 w-16 h-16 shadow border rounded-md">
            <img src={logo} />
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <main className="bg-gray-100 h-full">
          <img
            className="w-96 inset-0 animate-spin-slow m-auto absolute -z-1"
            src={logo}
          />
          {children}
        </main>
        <footer className="absolute bottom-0 py-1 px-2 text-right border-t hover:(bg-gray-300) transition left-0 right-0 shadow bg-gray-200">
          @Tomoki Miyauci
        </footer>
      </div>
    </div>
  )
}

export default Default
