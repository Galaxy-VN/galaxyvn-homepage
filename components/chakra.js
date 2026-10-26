import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
  } from '@chakra-ui/react'
  import theme from '../lib/theme'
  
  export default function Chakra({ cookies, children }) {
    const colorModeManager =
      typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
  
    return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    )
  }
  
  export async function getServerSideProps({ req }) {
    // only the color-mode cookie crosses to the client, never the full Cookie header
    const cookies = (req.headers.cookie ?? '')
      .split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith('chakra-ui-color-mode='))
      .join('; ')
    return {
      props: {
        cookies
      }
    }
  }