import SectionTitle from "./SectionTitle"
import { useState } from "react"
import Chip from "./Chip"

const tabs = [
    {
        title: "Spechy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        position: "Frontend Developer",
        date: "2022 - Present",
    },
    {
        title: "Luna",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        position: "Frontend Developer",
        date: "2021 - 2022",
    },
    {
        title: "Temajet",
        description: "Aenean in elementum augue. Sed blandit porta nunc et pellentesque. Praesent sed sollicitudin lacus. Integer sodales interdum lorem, et molestie felis. Vestibulum euismod diam eros, vitae pulvinar ipsum consectetur id. Praesent luctus, turpis ac varius sagittis, leo ligula dignissim tellus, at sollicitudin purus nibh in tortor. Pellentesque bibendum metus magna, non suscipit mauris laoreet a. Maecenas mollis tellus id tellus iaculis, in imperdiet purus efficitur. Integer fermentum est sit amet maximus congue.",
        position: "Frontend Developer",
        date: "2020 - 2021",
    },
]

function Experience() {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabs = (index) => {
        setActiveTab(index)
    }

    const TabMenu = ({ index, children, classes, onclick }) => {
        return (
            <div
                onClick={onclick}
                className={`tab-item border-b-4 lg:border-r-4 lg:border-b-0 cursor-pointer inline-block py-3 font-medium text-gray-700 px-4 
            ${index === activeTab && "border-indigo-500 !text-indigo-500"}`}>
                <span className={classes}>{children}</span>
            </div>
        )
    }

    const TabPanel = ({ index, children }) => {
        return (
            <div className="tab-panel py-6 lg:px-6 lg:py-0" index={index}>
                {children}
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6">
            <SectionTitle>Experience</SectionTitle>
            <div className="Tabs flex flex-wrap w-full lg:w-[1024px] mx-auto">
                <div className="tab-items w-full lg:w-[15%] flex lg:flex-col">
                    {
                        tabs.map((tab, index) => {
                            return (
                                <TabMenu index={index} onclick={() => handleTabs(index)}>{tab.title}</TabMenu>
                            )
                        })
                    }
                </div>
                <div className="tab-panels w-full lg:w-[85%]">
                    {
                        tabs.map((tab, index) => {
                            return (
                                activeTab === index &&
                                <TabPanel index={index}>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{tab.title}</h3>
                                    <div><Chip>{tab.position}</Chip></div>
                                    <p className="mb-3 text-gray-600 leading-7">{tab.description}</p>
                                    <div className="text-xs text-gray-600 font-medium">{tab.date}</div>
                                </TabPanel>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience