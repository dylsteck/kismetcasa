import { useState } from 'react'

function NavBar() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

  const handleClick = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className="flex fixed w-screen justify-end items-center p-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={handleClick}
      >
        Apply
      </button>
    </div>
  )
}

export { NavBar }
