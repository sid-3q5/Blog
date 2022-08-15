import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Astra');

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body , author};

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added")
            setIsPending(false);
            // history.go(-1);

            history.push('/')

        });

    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body : </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author : </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Astra">Astra</option>
                    <option value="Breach">Breach</option>
                    <option value="Brimstone">Brimstone</option>
                    <option value="Chamber">Chamber</option>
                    <option value="Cypher">Cypher</option>
                    <option value="Jett">Jett</option>
                    <option value="Kay/O">Kay/O</option>
                    <option value="Killjoy">Killjoy</option>
                    <option value="Neon">Neon</option>
                    <option value="Omen">Omen</option>
                    <option value="Phoenix">Phoenix</option>
                    <option value="Raze">Raze</option>
                    <option value="Reyna">Reyna</option>
                    <option value="Sage">Sage</option>
                    <option value="Skye">Skye</option>
                    <option value="Sova">Sova</option>
                    <option value="Viper">Viper</option>
                    <option value="Yoru">Yoru</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;