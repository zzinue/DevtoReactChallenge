import React, { useEffect, useState } from 'react'
import ArticleComponent from '../ArticleComponent/ArcticleComponent'

const Content = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('http://localhost:3000/posts/')
            const data = await res.json();
            setPosts(data);
        }, 2000)
    }, [])
    return (
        <main className='Main-Content'>
            <header>
                <h1>Relevant</h1>
                <h1>Latest</h1>
                <h1>Top</h1>
                <nav>
                    <a href="">Week</a>
                    <a href="">Month</a>
                    <a href="">Year</a>
                    <a href="">Infinity</a>
                </nav>
            </header>
            <div className="posts">
                {/*    {
                    posts &&
                    posts.map(
                        (post, id) => {
                            return <ArticleComponent key={id} data={post} />;
                        })
                } */}
            </div>
        </main>
    )
}

export default Content