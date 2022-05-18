import React from 'react'

const ArticleSkeleton = () => {
    return (
        <div className='Skeleton-Wrapper'>
            <div className='Skeleton-Article'>
                <div className='Skeleton-Image' />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className='Skeleton Avatar'></div>
                    <div className='Skeleton Text'></div>
                </div>
                <div className='Skeleton Title'></div>
                <div className='Skeleton SmallText'></div>
            </div>
            <div className='Shimmer-Wrapper'>
                <div className='Shimmer'></div>
            </div>
        </div>
    )
}

export default ArticleSkeleton