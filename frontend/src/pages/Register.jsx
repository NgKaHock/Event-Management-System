import {useState} from "react";
import API from "../api";


function Register(){

    const [form,setForm]=useState({
        name:"",
        email:"",
        university:""
    });


    const submit = async(e)=>{

        e.preventDefault();


        await API.post(
            "register/",
            {
                ...form,
                event:1
            }
        );


        alert("Registered!");

    };


    return(

        <form onSubmit={submit}>

            <input
            placeholder="Name"
            onChange={
                e=>setForm({
                    ...form,
                    name:e.target.value
                })
            }
            />


            <input
            placeholder="Email"
            onChange={
                e=>setForm({
                    ...form,
                    email:e.target.value
                })
            }
            />


            <input
            placeholder="University"
            onChange={
                e=>setForm({
                    ...form,
                    university:e.target.value
                })
            }
            />


            <button>
                Register
            </button>

        </form>

    )

}

export default Register;