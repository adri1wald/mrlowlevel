import * as Avatar from '@radix-ui/react-avatar'
import Portrait from '@/public/me.jpg'
import * as styles from './Me.css'
import clsx from 'clsx'

type MeProps = {
  className?: string
}

export function Me(props: MeProps) {
  return (
    <Avatar.Root className={clsx(styles.root, props.className)}>
      <Avatar.Image
        className={styles.image}
        src={Portrait.src}
        alt="Portrait photo of Adrien Wald"
      />
      <Avatar.Fallback className={styles.fallback} delayMs={300}>
        AW
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
