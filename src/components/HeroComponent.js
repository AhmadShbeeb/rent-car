import {
  Autocomplete,
  BackgroundImage,
  Box,
  Button,
  Center,
  Stack,
  Title,
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
    // <Box sx={{ maxWidth: 300, maxHeight: '400' }} mx='auto' my='auto'>
    // <Box>
    <BackgroundImage
      src='/hero.jpg'
      radius='sm'
      sx={{
        // backgroundSize: 'auto 100%',
        // height: '200px',
        // width: '100%',
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        height: '400px',
        // filter: 'blur(1px)',
        // width: '100%',
      }}
    >
      <Stack align='center' spacing='xl'>
        <Title order={1} weight={400} align='center' color='#E62626'>
          Al Rafaheia Rent
        </Title>
        <Title order={2} weight={400} align='center' color='#3a3f44'>
          Welcome To New Type Of Luxury
        </Title>

        <Center sx={{ marginTop: '60px' }}>
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
      </Stack>
    </BackgroundImage>
    // </Box>
  )
}
export default HeroComponent
