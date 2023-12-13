import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    stroke='currentColor'
    strokeWidth='3'
    strokeLinecap='round'
    {...props}
  />
);

export default function ToggleNavbar({ onToggle }: { onToggle: () => void }) {
  return (
    <>
      <motion.button
        onClick={onToggle}
        aria-label='Toggle Navbar'
        className='absolute left-[8px] top-[8px] rounded-full p-4'
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden={true}
        >
          <Path
            variants={{
              closed: { d: 'M6 6L27 6' },
              open: { d: 'M6 27L27 6' },
            }}
          />
          <Path
            d='M6 16L27 16'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <Path
            variants={{
              closed: { d: 'M6 27L27 27' },
              open: { d: 'M6 6L27 27' },
            }}
          />
        </svg>
      </motion.button>
    </>
  );
}
