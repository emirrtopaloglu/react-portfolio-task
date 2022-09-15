function Chip({children}) {
  return (
    <span className="inline-block bg-indigo-100 rounded-xl px-4 py-0.5 cursor-default text-indigo-600 font-medium mb-2 mr-2">
        {children}
    </span>
  )
}

export default Chip