import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlog(newBlogs);
    // }


    // HOOKS 
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div>Loading...... </div>}
            { blogs && <BlogList blogs={blogs} title='All Blogs' />}
            {/* {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='Viper')} title="Viper's Blog"/> */}
        </div>
     );
}
 
export default Home;