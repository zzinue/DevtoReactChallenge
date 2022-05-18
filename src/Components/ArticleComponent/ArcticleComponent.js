import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ArticleComponent = (props) => {
    const {
        title,
        cover_image,
        tag_list,
        url,
        comments_count,
        positive_reactions_count,
        public_reactions_count,
        user,
        published_at

    } = props.data

    // console.log("articles data", props.data);
    return (
        <article className='Article'>
            {cover_image && (
                <a
                    href={url}
                    className="Article-Image"
                    style={{
                        backgroundImage: `url(${cover_image})`,
                    }}
                >
                    &nbsp;
                </a>
            )}
            <div className='Article-Details'>
                <div className='Picture'>
                    <img src={user.profile_image_90} alt="" />
                </div>
                <div className='Details'>
                    <a href={`http://dev.to/${user.username}`} >
                        <span className='Name'>
                            {user.username}
                        </span>
                    </a>
                    <a href={url}>
                        <span className='Time'>
                            {new Date(published_at).toLocaleDateString(
                                undefined, {
                                day: "numeric",
                                month: "long"
                            }
                            )}
                            &nbsp;
                            ({dayjs(published_at).fromNow()
                            })
                        </span>
                    </a>
                    <a href={url}>
                        <h3>{title}</h3>
                    </a>
                    <div className='Tags'>
                        {
                            tag_list.map(
                                (tag, id) => {
                                    return (
                                        <a key={id} href={`https://dev.to/t/${tag}`}>
                                            <span className='tag'>
                                                #{tag}
                                            </span>
                                        </a>
                                    )
                                })}
                    </div>
                    <div className='Additional-Details'>
                        <div className='Reactions'>
                            {
                                public_reactions_count + positive_reactions_count > 0 && (
                                    <a href={url}>
                                        <span>
                                            <i>
                                                <BiHeart />
                                            </i>
                                            &nbsp;
                                            {public_reactions_count + positive_reactions_count} &&nbsp;
                                            <span className='Hidden-Mobile'>
                                                reactions
                                            </span>
                                        </span>
                                    </a>
                                )
                            }

                            <a href={url}>
                                <span>
                                    <i>
                                        <FaRegComment />
                                    </i>
                                    &nbsp;
                                    {
                                        comments_count > 0 ? (
                                            <span>{comments_count} &nbsp;
                                                <span className='Hidden-Mobile'>Comments</span>
                                            </span>
                                        ) : null
                                    }
                                    {
                                        comments_count == 0 ? (
                                            <span>
                                                <span className='Show-Mobile'>{comments_count}</span>
                                                <span className='Hidden-Mobile'>Add comment</span>
                                            </span>
                                        ) : null
                                    }
                                </span>
                            </a>
                        </div>
                        <div className='Save'>
                            <small>1 min read</small>
                            <button>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleComponent