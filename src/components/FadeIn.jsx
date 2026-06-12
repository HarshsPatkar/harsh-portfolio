import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  const yOffset = direction === 'up' ? 18 : direction === 'down' ? -18 : 0
  const xOffset = direction === 'left' ? 18 : direction === 'right' ? -18 : 0

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
