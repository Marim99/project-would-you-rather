import { Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card " style={{ marginTop: "100px" }}>
        <h1 className="card-header text-center">404</h1>
        <div className="card-body text-center">
          Sorry That page can't be found
        </div>
        <Image src="https://gravatar.com/avatar/b0a3e9518c7c63b4c18110a88b66adb9?s=400&d=robohash&r=x " />
        <Link to="/">
          <Badge bg="secondary" style={{ height: "30px", marginLeft: "35%" }}>
            Back To Home Page
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
