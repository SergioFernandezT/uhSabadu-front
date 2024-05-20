import { useEffect, useState, useRef } from "react";

let [users, setUsers] = useState([]);

useEffect(() => {
    fetch("http://localhost:3737/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.data))
        .catch((e) => console.log(e));
}, []);

let list = () => { return users };

export default list;