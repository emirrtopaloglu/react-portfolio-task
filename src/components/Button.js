function Button({type = "submit", children}) {
  return (
    <button className="px-5 py-2 bg-transparent border-2 border-white text-white rounded duration-300 hover:bg-white hover:text-black" type={type}>{children}</button>
  )
}

export default Button