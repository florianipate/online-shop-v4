import { Link } from "react-router-dom";

const TopNavContainer = () => {
    return (
        <div className="nav-link-container">
            <Link className="nav-link" to = '/newin'>
                LINK 1
            </Link>
            <Link className="nav-link" to = '/newin'>
                LINK 2
            </Link>
            <Link className="nav-link" to = '/newin'>
                LINK 3
            </Link>
            <Link className="nav-link" to = '/newin'>
                LINK 4
            </Link>
            <Link className="nav-link" to = '/newin'>
                LINK 5
            </Link>
        </div>
    );
};
export default TopNavContainer;