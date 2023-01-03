import {img1} from '../images'

export default function NewTweet() {
    return (
        <div style={{borderBottom: '2px solid whitesmoke'}}>
            <img className='mb-3' src={img1} style={{width: 50, height: 50, borderRadius:50 }}/>
            <input placeholder="What's happening?" style={{border:0, fontSize:18, outline: 'none'}} className='mx-3'/>
        </div>
    )
}