import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title={"Nijigen Website"}>
        <Container>
            <Title>
                Nijigen Website <Badge>2022-</Badge>
            </Title>
            <P>
                Misora Kanon tell me to do this and i can&apos;t do anything to resist.
                Also it my learning material on front-end developer (Unofficial Product)
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href={"https://unofficial-nijigen.camchua.moe"} target="_blank" rel="noopener noreferrer">https://unofficial-nijigen.camchua.moe <ExternalLinkIcon mx={"2px"}/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Html, Css, Scss, JavaScript</span>
                </ListItem>
            </List>

            <WorkImage src={"/images/works/nijigen_01.png"} alt={"Nijigen"} />
            <WorkImage src={"/images/works/nijigen_02.png"} alt={"Nijigen"} />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'