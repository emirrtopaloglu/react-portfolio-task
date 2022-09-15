import Button from "./Button"
import Menu from "./Menu"
import { FaFacebookSquare, FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa"

function Header() {
  return (
    <div className="Header h-screen bg-gradient-to-r from-indigo-400 to-indigo-600">
        <div className="container mx-auto px-6">
            <Menu/>
            <div className="h-screen mt-[-64px] flex justify-center content-center flex-wrap text-center m-auto">
              <h1 className="text-7xl text-white font-bold mb-3 w-full">I'm Emir</h1>
                <p className="text-2xl text-white opacity-70 mb-5 w-full">I'm a web/mobile developer</p>
                <Button className="w-full">Contact Me</Button>
                <div className="flex mt-5 justify-center w-full">
                  <a href="https://facebook.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaFacebookSquare/></a>
                  <a href="https://twitter.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaTwitter/></a>
                  <a href="https://github.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaGithub/></a>
                  <a href="https://linkedin.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaLinkedin/></a>
                  <a href="https://dribbble.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaDribbble/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header