import cls from './Modal.module.scss'
import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { Portal } from '../Portal/Portal'

interface Props {
  open: boolean
  setOpen: () => void
  x: number
  y: number
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  open,
  setOpen,
  y,
  x
}) => {
  if (!open) return null

  return (
    <Portal element={document.getElementById('root')}>
      <div onClick={setOpen} tabIndex={1} className={cls.Modal}>
        <motion.div
          style={{ left: x - 160, top: y - 160 }}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className={cls.inner}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </div>
    </Portal>
  )
}
