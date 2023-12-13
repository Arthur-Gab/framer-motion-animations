import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Twitch, Github } from 'lucide-react';

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { velocity: -10000, stiffness: 1000 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 0 },
    },
  },
};

export default function NavLinks() {
  return (
    <motion.ul className='absolute w-full space-y-8 p-6' variants={ulVariants}>
      <motion.li variants={liVariants}>
        <Link
          href={'https://www.linkedin.com/in/art2354/'}
          target='_blank'
          className='flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 p-2 text-lg font-semibold text-white'
        >
          <Linkedin size={28} />
          Linkedin
        </Link>
      </motion.li>
      <motion.li variants={liVariants}>
        <Link
          href={'https://www.twitch.tv/a_gfer'}
          target='_blank'
          className='flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-pink-500 p-2 text-lg font-semibold text-white'
        >
          <Twitch size={28} />
          Twitch
        </Link>
      </motion.li>
      <motion.li variants={liVariants}>
        <Link
          href={'https://github.com/Arthur-Gab/'}
          target='_blank'
          className='flex items-center gap-2 rounded-md bg-gradient-to-r from-black to-neutral-500 p-2 text-lg font-semibold text-white'
        >
          <Github size={28} />
          Github
        </Link>
      </motion.li>
    </motion.ul>
  );
}
