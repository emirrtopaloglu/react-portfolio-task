function IconBox({icon, title, children}) {
  return (
    <div className="p-12 mb-8 w-[100%] lg:w-[49%] xl:w-[24%] rounded-md text-center bg-indigo-100 duration-300 hover:bg-indigo-500 group">
        <div className="icon flex justify-center text-4xl mb-4 duration-300 group-hover:text-white">
            {icon}
        </div>
        <div className="title font-bold text-2xl mb-3 duration-300 group-hover:text-white">
          {title}
        </div>
        <div className="duration-300 group-hover:text-white leading-7">
          {children}
        </div>
    </div>
  )
}

export default IconBox