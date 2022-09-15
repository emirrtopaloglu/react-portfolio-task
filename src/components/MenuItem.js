function MenuItem({link, children}) {
  return (
    <li className="px-5">
        <a className="inline-block text-white font-semibold duration-300 border-b-2 border-transparent hover:border-white hover:opacity-70 py-5" href={link} title={children}>{children}</a>
    </li>
  )
}

export default MenuItem