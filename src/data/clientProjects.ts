import pmate from '../assets/images/pmate.png'
import lcoach from '../assets/images/lcoach.png'
import reddie from '../assets/images/reddie.png'

type PortfolioItems = {
  id: number
  title: string
  description: string
  imgUrl: string
  url: string
}

const projects: PortfolioItems[] = [
  {
    id: 0,
    title: 'Propertymate',
    description:
      'Property Mate is a comprehensive online platform dedicated to helping individuals and businesses in Australia navigate the real estate market. With a user-friendly interface and a wealth of valuable resources, Property Mate offers a one-stop destination for all things related to buying, selling, or renting in properties.',
    imgUrl: pmate,
    url: 'https://propertymate.com.au/',
  },
  {
    id: 1,
    title: 'Life Coaching Academy',
    description:
      'The Life Coaching Academy is an online platform dedicated to the education and training of individuals interested in becoming life coaches or enhancing their coaching skills. This website serves as a hub for aspiring life coaches and provides valuable resources for personal development and professional growth.',
    imgUrl: lcoach,
    url: 'https://www.lifecoachingacademy.edu.au/',
  },
  {
    id: 3,
    title: 'Reddie',
    description:
      'Reddie is a forward-thinking Australian furniture company founded in 2015, with locations in Sydney and Indonesia. Specialize in creating timeless, custom-made furniture that prioritizes practicality and individual needs.',
    imgUrl: reddie,
    url: 'https://reddie.com.au/',
  },
]

export default projects
