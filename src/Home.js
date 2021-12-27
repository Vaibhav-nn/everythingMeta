import BlogList from './BlogList';
import blog_data from './data';

const Home = () => {

    return ( 
        <div className="home">
            <BlogList blogs= {blog_data}/>
        </div>
     );
}
 
export default Home;
