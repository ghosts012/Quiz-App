import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/login-validation";


const Login = () =>{

     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(
        {
            resolver: zodResolver(loginSchema),
            defaultValues:{
              email:'',
              password:'',
            }
          }
      );
      const loginSubmit = (userData: unknown) => {
        console.log("Form Submit", userData);
      };
    



    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Login Here</CardTitle>
            <CardDescription className="text-center">Quiz app Form</CardDescription>
        </CardHeader>

        <CardContent>
              <form onSubmit={handleSubmit(loginSubmit)}>
                 <div className="grid w-full max-w-sm items-center gap-3">
                 <Label htmlFor="email">Email</Label>
                 <Input  {...register("email")} type="email" id="email" placeholder="Email" />
                  <span className="text-red-500">
                  {errors.email && errors.email.message}
                 </span>
                 </div>
                 &nbsp;
                  <div className="grid w-full max-w-sm items-center gap-3">
                 <Label htmlFor="password">Password</Label>
                 <Input {...register("password")} type="password" id="password" placeholder="Password" />
                 <span className="text-red-500">
                    {errors.password && errors.password.message}
                </span>
                 </div>
                 &nbsp;
                 
                 

                 <div className="grid w-full max-w-sm items-center gap-3">
                   <Button type="submit">Login</Button>
                 </div>

                     
              </form>
        </CardContent>

    </Card>

    )
}

export default Login;