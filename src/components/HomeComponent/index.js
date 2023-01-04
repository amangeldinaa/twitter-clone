
import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { img2, img3, img4, img5, img6, img1 } from "./images"

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            content: "",
            tweets: [
                {
                    id: 0,
                    authorName: 'NASA',
                    authorUserName: '@nasa',
                    image: img2,
                    content: 'You don’t look a day over 4.5 billion years.', 
                    views: 500,
                    replies: 200,
                    retweets: 450,
                    likes: 3000
                },
                {
                    id: 1,
                    authorName: 'aesthetics anime',
                    authorUserName: '@vizuaIanime',
                    image: img5,
                    content: 'Anime : The Wind Rises.', 
                    views: 50,
                    replies: 20,
                    retweets: 210,
                    likes: 345
                },
                {
                    id: 2,
                    authorName: 'Movie Menfess',
                    authorUserName: '@moviemenfes',
                    image: img4,
                    content: 'mvs And in another life... I would be your girl ', 
                    views: 50,
                    replies: 289,
                    retweets: 453,
                    likes: 3450
                },
                {
                    id: 3,
                    authorName: 'Movie Menfess',
                    authorUserName: '@moviemenfes',
                    image: img3,
                    content: 'mvs And in another life... I would be your girl ', 
                    views: 50,
                    replies: 289,
                    retweets: 453,
                    likes: 3450
                },
                {
                    id: 4,
                    authorName: 'Movie Menfess',
                    authorUserName: '@moviemenfes',
                    image: img5,
                    content: 'mvs And in another life... I would be your girl ', 
                    views: 50,
                    replies: 289,
                    retweets: 453,
                    likes: 3450
                },
                {
                    id: 5,
                    authorName: 'Movie Menfess',
                    authorUserName: '@moviemenfes',
                    image: img6,
                    content: 'mvs And in another life... I would be your girl ', 
                    views: 50,
                    replies: 289,
                    retweets: 453,
                    likes: 3450
                },
            ]
        }
    }

    deleteTweet = (id) => {
        console.log('delete', id)
        this.setState({
            tweets: this.state.tweets.filter(item=> item.id!=id)
        })
    }

    onChangeTextInput = (e) => {
        console.log(e.target.value)
        this.setState({
            content: e.target.value
        })
    }

    addToTweet = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Aruzhan',
            authorUserName: '@amangledina',
            image: img1,
            content: this.state.content, 
            views: 0,
            replies: 0,
            retweets: 0,
            likes: 0
        }
        this.setState({
            tweets: [newTweet,...this.state.tweets],
            content: ''
        })
    }

    render () {
        const {tweets, content} = this.state;

        return (
            <div className="w-50 mt-3 mx-3">
                <p style={{fontWeight:700, fontSize:20}}>Home</p>
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweet}/>
                <TweetsList tweets={tweets} deleteTweet={this.deleteTweet}/>
            </div>
        )
    }
    
};

export default Home;