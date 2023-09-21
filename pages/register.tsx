import { useState } from "react"

export default function Register () {

    const [surName,setSurname] = useState <string>("");
    const [fisrtName,setFirstname] = useState <string>("");
    const [userName,setUsername] = useState <string> ("");
    const [email,SetEmail] = useState <string>("");
    const [password,setPassword] = useState <string>("");
    const [adress,setAdress] = useState <string>("");

return(
    <>
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md"></div>
    <div>
        <h1 className="text-black font-semibold mb-4 text-2xl">Register</h1>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surName">
                    Surname
                </label>
            </div>
        </form>
    </div>
    </div>
    </>
)
};