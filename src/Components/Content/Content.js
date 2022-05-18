import React, { useEffect, useState } from 'react'
import ArticleComponent from '../ArticleComponent/ArcticleComponent'

const Content = () => {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://dev.to/api/articles/')
            const data = await res.json();
            setArticles(data);
            console.log(data);
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
                <select id="DropDown-Select" className='DropDown'>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                    <option value="Infinity">Infinity</option>
                </select>
            </header>
            <div className="articles">
                {
                    articles &&
                    articles.map(
                        (article, id) => {
                            return <ArticleComponent key={id} data={article} />;
                        })
                }
            </div>
        </main>
    )
}

export default Content