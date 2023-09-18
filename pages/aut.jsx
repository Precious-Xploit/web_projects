import { useSession } from "next-auth/react"

function Blog({data}){
    const { data: session, status } = useSession()

    if (status === "authenticated") {
      return <p>Signed in as {data}</p>
    }
    
    return <a href="/api/auth/signin">Sign in</a>
}
export default Blog;

export async function getServerSideProps(context){
 
    return {

        props:{
            data:1?'premium':'free'
        }
    }
}
