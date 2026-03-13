import { useEffect, useRef } from 'react'

interface InkPoint {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  growth: number
}

export default function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<InkPoint[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const points = pointsRef.current
      const lastPoint = points[points.length - 1]
      const distance = lastPoint
        ? Math.hypot(e.clientX - lastPoint.x, e.clientY - lastPoint.y)
        : Infinity

      if (distance > 12) {
        pointsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 18 + 6,
          opacity: 0.7,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          growth: Math.random() * 0.5 + 0.2,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const points = pointsRef.current
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(26, 26, 26, ${p.opacity})`)
        gradient.addColorStop(1, 'rgba(26, 26, 26, 0)')

        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        p.size += p.growth
        p.opacity -= 0.012

        if (p.opacity <= 0) {
          points.splice(i, 1)
          i--
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  )
}
