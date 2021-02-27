import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
        aaa
        </Container>
      </Layout>
    </>
  )
}



// export default function Index({ preview, allPosts }) {
//   const heroPost = allPosts[0].node
//   const morePosts = allPosts.slice(1)
//   return (
//     <>
//       <Layout preview={preview}>
//         <Head>
//           <title>{CMS_NAME}</title>
//         </Head>
//         <Container>

//         </Container>
//       </Layout>
//     </>
//   )
// }

// export async function getStaticProps({ preview = false, previewData }) {
//   const allPosts = await getAllPostsForHome(previewData)
//   return {
//     props: { preview, allPosts },
//   }
// }
