import pic from '../day3/img.jpg'
import './img.css'
export default function Img() {
    console.log('img');
    return (<div>
        <img src={pic} alt='pic' />
    </div>)
}