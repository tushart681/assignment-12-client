import { useEffect, useState } from "react"

const useAdmin = email => {
    const [admin, setAdmin] = useState(false);
    const [adminload, setAdminload] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://y-seven-gilt.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin);
                    setAdminload(false);
                })
        }
    }, [email])
    return [admin, adminload]
}

export default useAdmin;