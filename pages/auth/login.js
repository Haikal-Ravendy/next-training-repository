import { useFormik } from "formik";
import * as Yup from "yup";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
export default function Login(){
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .max(30,'must be 30 characters or less')
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(20, "Must be 20 characters or less")
                .required("Required"),
        }),
        onSubmit: async (values) => {
            console.log('value', values);
            const credentials = await signIn(
                "credentials",
                {
                    email: values?.email,
                    password: values?.password,
                    redirect: false,
                },
            )
            if(!credentials?.error){
                router.push("/dashboard")
            }

            console.log("credentials ",credentials)
        }
    });
    return (
        <div className="w-full bg-gray-200 h-screen flex item-center justify-center">
            <div className= "w-1/3 bg-white rounded-lg shadow-xl p-6 h-1/2">
                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-0">
                    <label htmlFor="email" className="w-full my-4 flex flex-col space-y-4">
                        <span>Email</span>
                        <input 
                        type="email" name="email" placeholder="input your email"  value={formik.values.email} onChange={formik.handleChange}/>
                    </label>
                    {
                            formik.errors &&
                            formik.touched &&
                            formik.errors?.email &&
                            formik.touched?.email &&
                            <span className="!text-red-500 !text-xs">{formik.errors.email}</span>
                    }
                    <label htmlFor="password" className="w-full my-4 flex flex-col space-y-4">
                        <span>Password</span>
                        <input type="password" name="password" placeholder="input your password" value={formik.values.password} onChange={formik.handleChange}/>
                        {
                            formik.errors &&
                            formik.touched &&
                            formik.errors?.password &&
                            formik.touched?.password &&
                            <span className="!text-red-500 !text-xs">{formik.errors.password}</span>
                        }
                    </label>
                    <button type="submit" className="w-full rounded-xl text-white !bg-blue-500">Submit</button>
                </form>
            </div>
        </div>
    )
}