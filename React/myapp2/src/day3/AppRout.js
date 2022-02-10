import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AppRoute() {
    const user = useSelector(state => state.user)
    return (<div>
        {user}
        <Link to='/math'>Math</Link>
        <Link to='/hello'>Say hello</Link>
        <Link to='/img'>See Image</Link>
    </div>)

}