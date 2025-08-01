import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/login-validation.ts";
import { doLogin } from "../api/user-api.ts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const Login = () =>{
  const [message, setMessage] = useState('');
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
      const alertJSX = <div>
          <Alert variant="default">
  <AlertTitle></AlertTitle>
  <AlertDescription>
    {message}
  </AlertDescription>
</Alert>
        </div>
      const loginSubmit = async (userData: unknown) => {
        console.log("Form Submit", userData);
        try{
          const result = await doLogin(userData);
          if( result.data.message ){
            setMessage(result.data.message);
            console.log(result.data.message);
          }
          else{
            setMessage(result.data.message);
            console.log(result.data.message);
          }
        }
        catch(err){
          console.log("Login Fail", err);
        }
      };
    



    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Login Here</CardTitle>
            <CardDescription className="text-center">Quiz app Form</CardDescription>
        </CardHeader>

        <CardContent>
              <form onSubmit={handleSubmit(loginSubmit)}>
                {alertJSX}
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