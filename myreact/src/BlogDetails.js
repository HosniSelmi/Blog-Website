import { useParams } from "react-router-dom";


const BlogDetails = () => { 
    const {id} = useParams();
    return ( 
        <div className="blogs-details">
            <h2>Blogs details {id} </h2>
        </div>
     );
}
 
export default BlogDetails;