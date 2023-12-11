
import Article from "../article/article";
import AddArticle from "../addArticle/AddArticle";
// importuoju postdata
import PostsData from "../../data/Posts";

import { useState, userID } from "react";


const Main = ()=>{
    const [clicked, setClicked]=useState(false);
    // posts state
    const [posts, setPosts] = useState([])
    
    
    
    const handleClicked = ()=>{
        setClicked(true)
        
    }

    // gauna data parametr
    const handleFormData =(data)=>{
        setPosts((prevData)=>{
            return[data,...prevData]
        })
        setClicked(false)
    }

    
  
    return(
        <main>
            <div className="conatainer">
            <button onClick={handleClicked}>Clicked</button>
            {/* {clicked ? <h1>Mygtukas paspaustas</h1>: <div>Kazkas</div>} */}
            <h1>Naujienos</h1>
            <p>Pradejom mokytis React</p>
            {posts.map((post)=>
                <Article key = {post.id} title={post.title} description={post.description}/>
            )}
            </div>

            {clicked ?<div>
                <h3>Prideti naujiena</h3>
                <AddArticle onSave={handleFormData}/>
            </div> : <div></div>}

        </main>
    );
}

export default Main;

