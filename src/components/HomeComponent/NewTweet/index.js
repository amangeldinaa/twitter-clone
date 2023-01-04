import {img1} from '../images'

export default function NewTweet({content, onChangeTextInput, onTweet}) {
    return (
        <div style={{borderBottom: '2px solid whitesmoke'}}>
            <div>
                <img className='mb-3' src={img1} style={{width: 50, height: 50, borderRadius:50 }}/>
                <input onChange={onChangeTextInput} value={content} placeholder="What's happening?" style={{border:0, fontSize:18, outline: 'none'}} className='mx-3'/>
            </div>
            <div className='d-flex justify-content-end mb-3 mx-3'>
                <button onClick={onTweet} type="button" class="btn btn-primary" style={{borderRadius:50, backgroundColor:'#1D9BF0',borderColor:'#1D9BF0'}}>Tweet</button>
            </div>
        </div>
        
    )
}