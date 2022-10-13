import type { NextPage } from "next";
import Layout from "../components/Layout";
import supabaseClient from "../utils/supabase";


const Home: NextPage = (props:any) => {
 
  console.log(props)
  return (
    <Layout>
    {
      props.lessons.map((lesson:any) => {
        return(
          <p key={lesson.id}> {lesson.title} </p>
         
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

  console.log(data)
  return {
    props: {
      lessons: data
    }
  }
}
export default Home;
