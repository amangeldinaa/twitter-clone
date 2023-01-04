import { img2, img3, img4, img5, img6 } from "../images"
import Tweet from "./Tweet"

export default function TweetsList({tweets, deleteTweet}) {

    console.log(tweets)
    return (
       tweets.map((tweet) => <Tweet tweet={tweet} key={tweets.id} deleteTweet={deleteTweet}/>)
    )
    }