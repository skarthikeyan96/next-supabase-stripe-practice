import Link from "next/link";
import supabaseClient from "../utils/supabase"

const LessonDetails = (props:any) => {
    const {lesson:{data: data}} = props;

    return(
        <div className="m-4">
            <div className="pb-12">
            <Link href="/"> Back to dashboard </Link>
            </div>
            <h3 className="font-bold"> {data.title} </h3>
            <p> {data.description} </p>
        </div>
    )
}


export const getStaticPaths = async () => {

    const data = await supabaseClient.from('Lesson').select("id");
    const paths = data.data?.map(({id}) => {
        return {
            params: {
                id: id.toString()
            }
        }
    })

    return {
        paths
        ,
        fallback: false // if the user goes to id which is not in the path then go to 404 page.
    }

    

}

export const getStaticProps = async ({params: {id}}:any) => {

    // return only a single record filtered by the id
    const data = await supabaseClient.from('Lesson').select('*').eq('id', id ).single()

    console.log(data)
    return {
        props :{
            lesson: data
         }
    }

}
export default LessonDetails