export default function MenuItem({title, icon}) {
    return (
        <div className='d-flex my-3'>
             <div style={{width:30, height:30}}>
                {icon}
            </div>
            <p className='mx-3' style={{fontSize: 20, fontWeight:400}}>{title}</p>
        </div>
    )
};