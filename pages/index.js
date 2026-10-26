import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpg'
import thumbNijigen from '../public/images/works/nijigen.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'style', 'sizes', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box 
                borderRadius="lg" 
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I&apos;m a second-year student and backend developer in Vietnam!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        GalaxyVN
                    </Heading>
                    <p>Kazagi GalaxyVN (Developer / Editor / Designer)</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={3}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/profile.png"
                            alt="Profile image"
                            borderRadius="full"
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I&apos;m a freelancer developer and still learn for full-stack
                    developer. Feel free to check out my work that is motivation of 
                    me.
                </Paragraph>
                <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My Stupid Portfolio
                            </Button>
                        </NextLink>
                    </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2005</BioYear>
                    Born in Ho Chi Minh City, Viet Nam
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduated from secondary school
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Graduated from high school
                </BioSection>
                <BioSection>
                    <BioYear>2024 to present</BioYear>
                    Learning...
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On The Web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/galaxy-vn" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @galaxy-vn
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/galaxyvn_dev" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @galaxyvn_dev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/galaxyvn.dev/" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @galaxyvn.dev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/galaxyvn.dev/" target={"_blank"} rel={"noopener noreferrer"}>
                            <Button
                                variant={"ghost"}
                                colorScheme={"teal"}
                                leftIcon={<IoLogoFacebook />}
                            >
                                Pham Gia Huy
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    href="https://www.youtube.com/channel/UCKgGqDMob1OL7vCjAWaFhOw"
                    title="GalaTriVN 清志銀河"
                    thumbnail={thumbYouTube}
                >
                    My YouTube channel
                </GridItem>
                <GridItem
                    href="https://unofficial-nijigen.camchua.moe/"
                    title="Nijigen Website"
                    thumbnail={thumbNijigen}
                >
                    A fansite I write
                </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)


export default Home
export { getServerSideProps } from '../components/chakra'