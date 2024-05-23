import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Profile() {

    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    let [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3737/api/users/detail/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-4xl text-center p-20">Loading...</p>;
    if (user)
        return (
            <main>
                <div className="container">
                    <div className="row flex justify-center items-center">
                        <div className="">
                            <h2>Bienvenido {user.first_name} 🤗</h2>
                            <img src={`/images/users/${ user.image } `} />
                            <br />
                            <br />
                            <div className="alert alert-success">
                                {user.email}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
}
