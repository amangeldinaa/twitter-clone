import { img2, img3, img4, img5, img6 } from "../images"
import Tweet from "./Tweet"

export default function TweetsList() {

    const tweets = [
        {
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

    return (
       tweets.map((item, index) => <Tweet {...item} key={index}/>)
    )
    }