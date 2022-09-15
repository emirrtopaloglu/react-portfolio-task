import { FaCode } from 'react-icons/fa'
import IconBox from './IconBox'
import SectionTitle from './SectionTitle'

function Services() {
  return (
    <div className="container mx-auto px-6">
        <SectionTitle>Services</SectionTitle>
        <div className="flex flex-wrap justify-between">
          <IconBox icon={<FaCode/>} title="Web Development">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </IconBox>
          <IconBox icon={<FaCode/>} title="Mobile Development">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </IconBox>
          <IconBox icon={<FaCode/>} title="Satellite Producer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </IconBox>
          <IconBox icon={<FaCode/>} title="Photographer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </IconBox>
        </div>
    </div>
  )
}

export default Services