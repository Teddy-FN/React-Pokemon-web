import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../UI/Card/card";
import { Video } from "../../../assets";
import { Input } from "../../UI/Input/input";
import { Label } from "../../UI/Label/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../UI/Tabs/tabs";

import "./style.css";

// Form UseState Login
interface UseformLogin {
  email: string;
  password: string;
}

interface UseformRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<UseformLogin>({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState<UseformRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="relative h-screen overflow-hidden flex md:justify-center items-center md:px-0">
      <Card className="z-10 h-screen w-full opacity-100 md:w-fit md:h-fit p-4 bg-[#ff0000] rounded-md shadow-xl transition ease-in-out delay-150 duration-200 md:opacity-10 hover:opacity-100 ">
        <Tabs defaultValue="account" className="w-full md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="text-black">
              Account
            </TabsTrigger>
            <TabsTrigger value="register" className="text-black">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <CardHeader>
              <CardTitle className="text-[#fff]">Account</CardTitle>
              <CardDescription className="text-[#fff]">
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-[#fff]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue=""
                  placeholder="Enter Your Email"
                  value={login.email}
                  onChange={(e) =>
                    setLogin((prevState) => {
                      return {
                        ...prevState,
                        email: e.target.value,
                      };
                    })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="current" className="text-[#fff]">
                  Password
                </Label>
                <Input
                  id="current"
                  type="password"
                  defaultValue=""
                  placeholder="Enter Your Password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin((prevState) => {
                      return {
                        ...prevState,
                        password: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button onClick={() => navigate("/")} className="w-full">
                Log in
              </Button>

              {/* Login Google */}
              <Button className="w-full">Log With Google</Button>
            </CardFooter>
          </TabsContent>
          <TabsContent value="register">
            <CardHeader>
              <CardTitle className="text-[#fff]">Register</CardTitle>
              <CardDescription className="text-[#fff]">
                Form new user please register.
                {/* Make changes to your account here. Click save when you're done. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex-col flex gap-4 md:flex-row md:justify-center md:items-center ">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-[#fff]">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    defaultValue=""
                    value={register.firstName}
                    onChange={(e) =>
                      setRegister((prevState) => ({
                        ...prevState,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-[#fff]">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter Your First Name"
                    defaultValue=""
                    value={register.lastName}
                    onChange={(e) =>
                      setRegister((prevState) => ({
                        ...prevState,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-[#fff]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  defaultValue=""
                  value={register.email}
                  onChange={(e) =>
                    setRegister((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password" className="text-[#fff]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  defaultValue=""
                  placeholder="Enter Your Password"
                  value={register.password}
                  onChange={(e) =>
                    setRegister((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full">Sign Up</Button>

              {/* SignUp Google */}
              <Button className="w-full">Signup With Google</Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>

      <video
        className="w-full h-full absolute object-cover opacity-70"
        autoPlay
        muted
        loop
      >
        <source src={Video.VideoBackground} type="video/mp4" />
      </video>
    </div>
  );
};

export default Login;
