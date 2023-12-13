'use client';

import { useDimensions } from '@/hooks/useDimensions';
import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';
import ToggleNavbar from './ToggleNavbar';
import NavLinks from './NavItem';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 25,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const navRef = useRef(null);
  const { height } = useDimensions(navRef);

  return (
    <>
      <motion.nav
        initial={false}
        className='absolute inset-0 flex w-[300px] items-center'
        ref={navRef}
        custom={height}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className='absolute inset-0 w-[300px] border bg-white'
          variants={sidebar}
        />
        <NavLinks />
        <ToggleNavbar
          onToggle={() => {
            setIsOpen();
          }}
        />
      </motion.nav>
    </>
  );
}
