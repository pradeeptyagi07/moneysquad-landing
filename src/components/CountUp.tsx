"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  delay?: number
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      
      let startTime: number
      let animationFrame: number
      
      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        
        setCount(Math.floor(easedProgress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(countUp)
        }
      }
      
      // Delay the animation start if needed
      setTimeout(() => {
        animationFrame = requestAnimationFrame(countUp)
      }, delay * 1000)
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, controls, delay])
  
  const formatNumber = (num: number) => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
      }}
    >
      <motion.span>
        {prefix}{formatNumber(count)}{suffix}
      </motion.span>
    </motion.div>
  )
}

export default CountUp
