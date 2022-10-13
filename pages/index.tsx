import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import supabaseClient from "../utils/supabase";


const Home: NextPage = (props:any) => {
 
  if(!props.lessons && props.lessons.length === 0 ) return <p> Loading ...</p>
  return (
    <Layout>
    {
      props.lessons.map((lesson:any, index: string) => {
        return(
          <div key={lesson.id} className="m-8 border p-4 rounded-md shadow-sm">
             <Link href={`/${lesson.id}`}> 
          <a> {lesson.title} </a> 
          </Link>
          </div>
         
        )
      })
    }
    </Layout>
  );
};

// pre-render using get static props
export const getStaticProps = async () => {

  // query all the data from the lesson table
  const {data} = await supabaseClient.from('Lesson').select('*')

  // console.log(data)
  return {
    props: {
      lessons: data
    }
  }
}
export default Home;
