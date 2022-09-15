import { FaFacebookSquare, FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa"

function Footer() {
    return (
        <div className="text-center bg-indigo-900 py-8 px-6">
            <div className="flex mt-5 justify-center w-full mb-6">
                <a href="https://facebook.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaFacebookSquare /></a>
                <a href="https://twitter.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaTwitter /></a>
                <a href="https://github.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaGithub /></a>
                <a href="https://linkedin.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaLinkedin /></a>
                <a href="https://dribbble.com/" className="text-white text-2xl mr-5 duration-300 opacity-70 hover:opacity-100"><FaDribbble /></a>
            </div>
            <div className="text-white opacity-70 text-lg leading-7">
                Copyright &copy; <a href="/" className="text-indigo-200">Emir Topaloğlu</a>. All right reserved.
            </div>
        </div>
    )
}

export default Footer