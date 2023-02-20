import { useEffect,useState } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import workServices from "../../services/workServices";

function Work(){
    const [works, setWorks] = useState([]);
 

    useEffect(() => 
    workServices.getAll().then((res) => {
        setWorks(res.data)
        console.log(res.data);
    }), []

    
    )
    return(
        <>
        <div>
            <h1>Work</h1>
            <ListGroup>
                <ListGroupItem key={works._id}>{works.name}</ListGroupItem>
            </ListGroup>
        </div>
        </>
    )

    }

export default Work;