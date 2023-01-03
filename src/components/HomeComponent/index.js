
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";

function Home() {
    return (
        <div className="w-50 mt-3 mx-3">
            <p style={{fontWeight:700, fontSize:20}}>Home</p>
            <NewTweet/>
            <TweetsList/>
        </div>
    )
}

export default Home;