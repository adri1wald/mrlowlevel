import * as Avatar from '@radix-ui/react-avatar'
import Portrait from '@/public/me.jpg'
import * as styles from './Me.css'
import { Box, BoxProps } from './Box'

type MeProps = BoxProps

export function Me(props: MeProps) {
  return (
    <Avatar.Root className={styles.root} asChild>
      <Box as="span" {...props}>
        <Avatar.Image
          className={styles.image}
          src={Portrait.src}
          alt="Portrait photo of Adrien Wald"
        />
        <Avatar.Fallback className={styles.fallback} delayMs={300}>
          AW
        </Avatar.Fallback>
      </Box>
    </Avatar.Root>
  )
}
