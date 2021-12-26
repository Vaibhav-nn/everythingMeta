import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Metaverse basics', body: 'lorem ipsum...', author: 'Parth', id: 1 },
        { title: 'NFT in the metaverse', body: 'lorem ipsum...', author: 'Vaibhav', id: 2 },
        { title: 'Services provided ', body: 'lorem ipsum...', author: 'Parth', id: 3 }
    ]) 

    return ( 
        <div className="home">
            <BlogList blogs= {blogs}/>
        </div>
     );
}
 
export default Home;
