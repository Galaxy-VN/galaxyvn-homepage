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
    <Layout title={"Oregen3"}>
        <Container>
            <Title>
                Oregen 3 <Badge>2018-</Badge>
            </Title>
            <P>
                Oregen3 is a plugin that completely recodes from a recently
                emerged plugin that allows you to build both a Cobblestone
                Generator with fences and water.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website (Github)</Meta>
                    <Link href={"https://github.com/xHexed/Oregen3"} target="_blank" rel="noopener noreferrer">https://github.com/xHexed/Oregen3 <ExternalLinkIcon mx={"2px"}/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Software</Meta>
                    <span>Bukkit/Spigot/Paper</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java</span>
                </ListItem>
            </List>

            <WorkImage src={"/images/works/oregen3_01.png"} alt={"Oregen"} />
            <WorkImage src={"/images/works/oregen3_02.png"} alt={"Oregen"} />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'