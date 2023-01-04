import { img2, VIEW_SVG, REPLY_SVG, RETWEET_SVG, LIKE_SVG, SHARE_SVG, DELETE_SVG } from "../images"

export default function Tweet({tweet, deleteTweet}) {
    console.log(tweet)
    return (
        <div className="mt-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <div className="d-flex justify-content-between">
                <p className="mx-7" style={{fontSize:14, fontWeight:'600'}}>You might like it! <span style={{color:'#1D9BF0'}}>See More</span></p>
                <button className='mx-2' onClick={()=>deleteTweet(tweet.id)} 
                    style={{width:30, height:30, border:'none', backgroundColor: 'transparent'}}>
                    {DELETE_SVG}
                </button>
            </div>
            
            <div className="d-flex">
                <img src={tweet.image} style={{width:50, height:50, borderRadius:50}}/>
                <div className="mx-3">
                    <p style={{fontSize:14,fontWeight:'600',marginBottom:-2}}>{tweet.authorName} <span style={{color:'gray'}}>{tweet.authorUserName}</span></p>
                    <p style={{fontSize:14}}>{tweet.content}</p>
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{width:'80%'}}>
                 <div className="d-flex">
                    <div className='mx-2' style={{width:18, height:18}}>{VIEW_SVG}</div>
                    <p>{tweet.views}</p>
                </div>
                <div className="d-flex">
                    <div className='mx-2' style={{width:18, height:18}}>{REPLY_SVG}</div>
                    <p>{tweet.replies}</p>
                </div>
                <div className="d-flex">
                    <div className='mx-2' style={{width:18, height:18}}>{RETWEET_SVG}</div>
                    <p>{tweet.retweets}</p>
                </div>
                <div className="d-flex">
                    <div className='mx-2' style={{width:18, height:18}}>{LIKE_SVG}</div>
                    <p>{tweet.likes}</p>
                </div>
                <div className="d-flex">
                    <div style={{width:18, height:18}}>{SHARE_SVG}</div>
                </div>
                    
            </div>

        </div>
    )
} 