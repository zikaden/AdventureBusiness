
import { SelectedPage, TourType } from '../../shared/types'
import image1 from "../../assets/01_backpack.jpg.png"
import image2 from "../../assets/02_muddy path.jpg.png"
import image3 from "../../assets/03_waterfall.jpg.png"
import image4 from "../../assets/04_stone path.jpg.png"
import image5 from "../../assets/05_misty forest.jpg.png"
import image6 from "../../assets/06_hermit.jpg.png"
import { motion } from 'framer-motion'
import HText from '../../shared/HText'
import { ClassType } from 'react'
import Tour from './Tout'

const tours: Array<TourType> = [
  {
    name: "Solo Backpacking",
    description: "Proin pretium viverra tellus, id placerat nisi volutpat id.",
    image: image1,
  },
  {
    name: "Trail Hiking",
    description: "Aliquam erat volutpat. Integer sollicitudin bibendum nisi ut dapibus.",
    image: image2,
  },
  {
    name: "Seanic Spot Finder",
    description: "Donec sed vehicula tellus. Integer aliquam at ante in aliquam. Mauris a ipsum augue.",
    image: image3,
  },
  {
    name: "Long-Distance Hiking",
    description: "Ut at sapien ac ipsum tristique bibendum. Nullam sit amet facilisis mauris.",
    image: image4,
  },
  {
    name: "Forest Retreat",
    description: "Proin pretium viverra tellus, id placerat nisi volutpat id.",
    image: image5,
  },
  {
    name: "Cabin Adventures",
    description: " Nam aliquet, quam id blandit rutrum, orci tellus rhoncus augue.",
    image: image6,
  },
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurTours = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourtours" className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurTours)}
      >
        {/* HEADINGS */}
        <motion.div
          className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className='md:w-3/5'>
            <HText>OUR TOURS</HText>
            <p className='py-5'>Ut varius porttitor sapien a maximus. Vestibulum quis eros augue. Nam aliquet, quam id blandit rutrum, orci tellus rhoncus augue, vitae malesuada quam neque at neque.</p>
          </div>
        </motion.div>
        {/* SIDE-SCROLLER */}
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {tours.map((item: TourType, index) => (
              <Tour
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurTours