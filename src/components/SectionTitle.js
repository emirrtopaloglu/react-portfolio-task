function SectionTitle({children}) {
  return (
    <div className="py-24 mx-auto">
        <h2 className="text-center text-5xl font-bold block mb-4">
            {children}
        </h2>
        <div className="w-20 h-2 rounded-lg bg-indigo-400 mx-auto"></div>
    </div>
  )
}

export default SectionTitle