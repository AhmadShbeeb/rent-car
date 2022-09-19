import {
  Autocomplete,
  BackgroundImage,
  Box,
  Button,
  Center,
  Stack,
  Text,
} from '@mantine/core'
import { IconCaretRight, IconSearch } from '@tabler/icons'
import Image from 'next/image'
import HeroImage from '../../public/hero.jpg'

const HeroComponent = () => {
  const allCars = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <Box sx={{ maxHeight: 800 }}>
      <BackgroundImage src='/hero.jpg' radius='sm'>
        <Center p='md'>
          <Text color='#fff'>Al Rafaheia Rent</Text>
        </Center>
        <Center p='md'>
          <Text color='#fff'>Welcome To New Type Of Luxury</Text>
        </Center>

        <Center>
          <Autocomplete
            icon={<IconSearch />}
            radius='md'
            placeholder='Search Car Rentals in Dubai'
            data={['car1', 'car2', 'car3', 'car4']}
            sx={{ width: '300px' }}
          />
          <Button
            component='a'
            rightIcon={<IconCaretRight size={18} />}
            sx={{
              backgroundColor: '#ED8413',
              '&:hover': {
                backgroundColor: '#ff8e15',
              },
            }}
          >
            View All Cars
          </Button>
        </Center>
      </BackgroundImage>
    </Box>
  )
}
export default HeroComponent
