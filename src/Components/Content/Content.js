import React, { useEffect, useState } from 'react'
import ArticleComponent from '../ArticleComponent/ArcticleComponent'
import ArticleSkeleton from '../ArticleSkeleton/ArticleSkeleton'
import ArticleComponent2 from '../ArticleComponent2/ArticleComponent2'

const Content = () => {
    const [articles, setArticles] = useState([])
    /*     const fetcAgain = () => {
            if (articles != null) {
                fetch('https://dev.to/api/articles')
                    .then((res) => res.json())
                    .then((result) => setArticles([...articles, ...result]))
            }
    
        } */
    /*    const handleScroll = () => {
           const html = document.documentElement;
           const body = document.body;
           const windowheight = "innerHeight" in window ? window.innerHeight : html.offsetHeight;
           const docHeight = Math.max(
               body.scrollHeight,
               body.offsetHeight,
               html.scrollHeight,
               html.offsetHeight
           )
           const windowBottom = windowheight + window.pageYOffset;
           if (windowBottom >= docHeight) {
               console.log('We are reached the bottoms')
               fetcAgain();
           }
       } */
    /*  useEffect(() => {
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll)
     }, [articles]) */
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('http://localhost:3001/posts')
            const data = await res.json();
            setArticles(data.payload);
            console.log(data.payload);
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

                    articles.map(
                        (payload, id) => {
                            return <ArticleComponent key={id} data={payload} />;
                        })
                }
                {/*    {
                    !articles &&
                    [1, 2, 3, 4, 5].map(a => <ArticleSkeleton key={a} />)
                } */}
            </div>
        </main>
    )
}

export default Content