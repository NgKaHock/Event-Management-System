import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
// import { useNavigate } from "react-router-dom";


function Register(){

    // const navigate = useNavigate();
    const { id } = useParams();

    const [form,setForm] = useState({
        name:"",
        email:"",
        university:""
    });


    const [loading,setLoading] = useState(false);


    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const submit = async(e)=>{

        e.preventDefault();

        try{

            setLoading(true);


            await API.post(
                "register/",
                {
                    ...form,
                    event:id
                }
            );


            // navigate(`/events/${id}`)

            alert("Registered successfully!");
            

            setForm({
                name:"",
                email:"",
                university:""
            });
                 

        }catch(error){

            console.error(error);
            console.log(error.response?.data);

            alert(
                "Registration failed. Please try again.",
            );

        }finally{

            setLoading(false);

        }

    };


    return(

        <form onSubmit={submit}>


            <input
                name="name"
                value={form.name}
                placeholder="Name"
                onChange={handleChange}
                required
            />


            <input
                name="email"
                value={form.email}
                placeholder="Email"
                type="email"
                onChange={handleChange}
                required
            />


            <input
                name="university"
                value={form.university}
                placeholder="University"
                onChange={handleChange}
                required
            />


            <button disabled={loading}>

                {
                    loading 
                    ? "Registering..."
                    : "Register"
                }

            </button>


        </form>

    )

}


export default Register;