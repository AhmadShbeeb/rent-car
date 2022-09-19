import { Box, Button, NavLink } from '@mantine/core'
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
  IconHome2,
  IconQuestionMark,
} from '@tabler/icons'
import Link from 'next/link'

const Header1 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4D4D4D',
      }}
    >
      <Link href='/' passHref>
        <Button
          component='a'
          leftIcon={<IconHome2 size={18} />}
          sx={{
            backgroundColor: '#00000000',
            '&:hover': {
              backgroundColor: '#000000ff',
            },
          }}
        >
          Home
        </Button>
      </Link>
      <Link href='/about' passHref>
        <Button
          component='a'
          rightIcon={<IconQuestionMark size={18} />}
          sx={{
            backgroundColor: '#00000000',
            '&:hover': {
              backgroundColor: '#000000ff',
            },
          }}
        >
          About
        </Button>
      </Link>
    </Box>
  )
}
export default Header1
