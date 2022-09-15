import { FaGithub, FaGlobe, FaReact } from "react-icons/fa"
import Chip from "./Chip"
import SectionTitle from "./SectionTitle"

const projects = [
    {
        title: "Jetly Blog & Magazine WordPress Theme",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, quam vitae ornare sagittis, dui ligula tempor urna, ac varius nisl dolor sit amet mi. Vestibulum convallis felis maximus, ullamcorper dui vel, laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum tempor sodales.",
        image: "https://cdn.dribbble.com/users/8801773/screenshots/16252949/media/18f99ebc08d4fa2acee259f0ffe8c695.jpg",
        chips: [
            "WordPress",
            "Custom Theme"
        ],
        links: [
            {
                icon: <FaGithub />,
                url: "https://github.com/"
            },
            {
                icon: <FaGlobe />,
                url: "https://demo.temajet.com/"
            }
        ]
    },
    {
        title: "Cimri Clone using React.JS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, quam vitae ornare sagittis, dui ligula tempor urna, ac varius nisl dolor sit amet mi. Vestibulum convallis felis maximus, ullamcorper dui vel, laoreet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum tempor sodales.",
        image: "https://camo.githubusercontent.com/ed7a1378c7c8b185711f926d2230f5999f43a1404aa792916c441c72c35b2b6c/68747470733a2f2f692e68697a6c69726573696d2e636f6d2f72686430776c372e706e67",
        chips: [
            "React",
            "Styled Components"
        ],
        links: [
            {
                icon: <FaGithub />,
                url: "https://github.com/emirrtopaloglu/cimri-clone"
            },
            {
                icon: <FaReact />,
                url: "https://cimri-clone.netlify.app/"
            }
        ]
    }
]

function Project() {
    return (
        <div className="container mx-auto px-6">
            <SectionTitle>Projects</SectionTitle>
            {
                projects.map((project, index) => {
                    return (
                        <div className={`project${"-" + index} flex flex-wrap justify-between odd:flex-row-reverse items-center h-full mb-24`}>
                            <div className="project-image w-full lg:w-[49%] overflow-hidden lg:rounded-lg lg:shadow">
                                <img
                                    className="w-full h-[200px] lg:h-[400px] object-cover hover:scale-105 overflow-hidden duration-500"
                                    src={project.image}
                                    alt={project.title} />
                            </div>
                            <div className="project-text p-6 lg:p-12 h-full relative w-[100%] lg:w-[49%] lg:rounded-md bg-indigo-50 duration-300">
                                <h3 className="font-semibold text-2xl mb-4">{project.title}</h3>
                                <p className="mb-6">{project.description}</p>
                                <div className="mb-2">
                                    {
                                        project.chips.map((chip, index) => {
                                            return(
                                                <Chip index={index}>{chip}</Chip>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex">
                                    {
                                        project.links.map((link, index) => {
                                            return(
                                                <a href={link.url} className="text-xl text-indigo-700 mr-3">{link.icon}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project