import {
  Accordion,
  Box,
  Button,
  Group,
  Menu,
  NavLink,
  Space,
  UnstyledButton,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconHome2 } from '@tabler/icons'
import Link from 'next/link'

const Header2 = () => {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     backgroundColor: '#ffffff',
    //     padding: '8px',
    //   }}
    // >
    <Group spacing='xl' position='apart' sx={{ padding: '8px' }}>
      <Menu
        trigger='hover'
        openDelay={50}
        closeDelay={50}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <UnstyledButton>RENT A CAR</UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href='/'>
            CAR1
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu
        trigger='hover'
        openDelay={50}
        closeDelay={50}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <UnstyledButton>CAR BRANDS</UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href='/'>
            BRAND1
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu
        trigger='hover'
        openDelay={50}
        closeDelay={50}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <UnstyledButton>CAR WITH DRIVER</UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href='/'>
            DRIVER1
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu
        trigger='hover'
        openDelay={50}
        closeDelay={50}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <UnstyledButton>DRIVER SERVICE</UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href='/'>
            SERVICE1
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu
        trigger='hover'
        openDelay={50}
        closeDelay={50}
        shadow='md'
        width={200}
      >
        <Menu.Target>
          <UnstyledButton sx={{ backgroundColor: '#ED8323' }}>
            HOT DEALS
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href='/'>
            DEAL1
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
export default Header2
