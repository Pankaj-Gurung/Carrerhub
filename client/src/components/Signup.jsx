import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const {isAuthorized, setIsAuthorized, user, setUser} = useContext(Context);

    const handleRegister = async (e)=>{
        a.preventDefault();
        try{
            const {data} = await axios.post("",{name, email, password, phone, role}, {withCredentials: true, headers:{
                "Content-Type" : "application/json",
            },
        }
        );
        toast.success(data.message);
        setName("")
        setEmail("")
        setPhone("")
        setRole("")
        setPassword("")
        setIsAuthorized(true)
        } 
        
        catch(error){
            toast.error(error.response.data.message)
        }
    }
  return (
    <div>
      <h1>signup</h1>
    </div>
  )
}

export default Signup
