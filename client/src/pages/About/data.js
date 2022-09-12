import { HiOutlineNewspaper } from 'react-icons/hi'
import { FaBrain, FaShareAlt } from 'react-icons/fa'
import { MdSecurity, MdHelp } from 'react-icons/md'
import { BsSpellcheck } from 'react-icons/bs'

import person1 from '../../assets/images/mark-zuckerberg.jpg'
import person2 from '../../assets/images/elon-musk.jpg'
import person3 from '../../assets/images/bill-gates.png'

export const commitmentData = [
    {
        icon: FaBrain,
        title: 'Knowledge',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi accusantium aliquid atque ad dolore est itaque!',
    },
    {
        icon: HiOutlineNewspaper,
        title: 'Latest news',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi accusantium aliquid.',
    },
    {
        icon: FaShareAlt,
        title: 'Share stories',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi accusantium aliquid atque ad dolore.',
    },
    {
        icon: MdHelp,
        title: 'Useful',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi.',
    },
    {
        icon: MdSecurity,
        title: 'Security',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi accusantium aliquid atque ad dolore est itaque!',
    },
    {
        icon: BsSpellcheck,
        title: 'Convenient',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis doloremque commodi accusantium aliquid atque ad dolore est.',
    },
]

export const counterData = [
    { title: 'Posts', quantity: 1412 },
    { title: 'Categories', quantity: 108 },
    { title: 'Authors', quantity: 3107 },
    { title: 'Awards', quantity: 9 },
]

export const feedbackData = [
    {
        name: 'Mark Zuckerberg',
        avatar: person1,
        content:
            'I know this goal wasn’t easy. How you managed to set it and systematically work towards it until you achieved it truly speaks to your intelligence, tenacity, and perseverance.',
    },
    {
        name: 'Elon Musk',
        avatar: person2,
        content:
            'I wanted to tell you how much I appreciate the quality of your work. I can tell you take pride in your work and it shows in your deliverables.',
    },
    {
        name: 'Bill Gates',
        avatar: person3,
        content:
            'You absolutely crushed that demo! You have made such big improvements from when you first started in this role. I noticed and appreciated how much you’ve worked on learning to tell the bigger story. Way to keep at it.',
    },
]
