import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver} from '@hookform/resolvers/zod';
import { registerSchema } from "../validations/register-validation.ts";
import { doRegister } from "../api/user-api";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const Register = () => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues:{
      email:'',
      password:'',
      name:''
    }
  });
        const alertJSX = <div>
          <Alert variant="destructive">
  <AlertTitle>Register Message</AlertTitle>
  <AlertDescription>
    {message}
  </AlertDescription>
</Alert>
        </div>
  const registerSubmit = async (userData: unknown) => {
    console.log("Form Submit", userData);
    try{
      const result = await doRegister(userData);
      console.log('Result ', result);
      if( result.data.message ){
        setStatus(false);
        navigate('/login');
      }
      else{
        setStatus(true);
        setMessage('Unable to register..');
        console.log("Unable to register..");
      }
    }
    catch(err){
      setStatus(true);
      setMessage(err.response.data.message);
      console.log("Register Fail ", err);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="space-y-1 text-center">Register Here</CardTitle>
        <CardDescription className="text-center">Quiz app Form</CardDescription>
      </CardHeader>

      <CardContent>
        {status && alertJSX}
        <form onSubmit={handleSubmit(registerSubmit)}>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
            />
            <span className="text-red-500">
              {errors.email && errors.email.message}
            </span>
          </div>
          &nbsp;
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Password"
            />
            <span className="text-red-500">
              {errors.password && errors.password.message}
            </span>
          </div>
          &nbsp;
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Name"
            />
            <span className="text-red-500">
              {errors.name && errors.name.message}
            </span>
          </div>
          &nbsp;
          <div className="flex space-x-6 items-center mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="student"
                {...register("userType")}
                className="form-radio h-4 w-4 text-primary focus:ring focus:ring-primary"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Student
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="teacher"
                {...register("userType")}
                className="form-radio h-4 w-4 text-primary focus:ring focus:ring-primary"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Teacher
              </span>
            </label>
            
          </div>
            <span className="text-sm text-red-500">
              {errors.userType && errors.userType.message}
            </span>
          &nbsp;
          <div className="grid w-full max-w-sm items-center gap-3">
            <Button>Register</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;