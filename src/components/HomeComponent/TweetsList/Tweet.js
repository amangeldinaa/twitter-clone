import { img2, VIEW_SVG, REPLY_SVG, RETWEET_SVG, LIKE_SVG, SHARE_SVG } from "../images"

export default function Tweet(item) {
    console.log(item)
    return (
        <div className="mt-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className="mx-7" style={{fontSize:14, fontWeight:'600'}}>You might like it! <span style={{color:'blue'}}>See More</span></p>
            <div className="d-flex">
                <img src={item.image} style={{width:50, height:50, borderRadius:50}}/>
                <div className="mx-3">
                    <p style={{fontSize:14,fontWeight:'600',marginBottom:-2}}>{item.authorName} <span style={{color:'gray'}}>{item.authorUserName}</span></p>
                    <p style={{fontSize:14}}>{item.content}</p>
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{width:'80%'}}>
                 <div className="d-flex">
                    {VIEW_SVG}
                    <p>{item.views}</p>
                </div>
                <div className="d-flex">
                    {REPLY_SVG}
                    <p>{item.replies}</p>
                </div>
                <div className="d-flex">
                    {RETWEET_SVG}
                    <p>{item.retweets}</p>
                </div>
                <div className="d-flex">
                    {LIKE_SVG}
                    <p>{item.likes}</p>
                </div>
                <div className="d-flex">
                    {SHARE_SVG}
                </div>
                    
            </div>

        </div>
    )
} 