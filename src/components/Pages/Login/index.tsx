import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { Button } from "../../UI/Button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../UI/Card/card";
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
    <div className="bg-green-200 px-4 h-dvh flex justify-center items-center md:w-full md:bg-red-200 md:px-0">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="current">Password</Label>
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
            <CardFooter>
              <Button>Log in</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Form new user please register.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex-col flex gap-4 md:flex-row md:justify-center md:items-center ">
                <div className="space-y-1">
                  <Label htmlFor="firstName">First Name</Label>
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
                  <Label htmlFor="lastName">Last Name</Label>
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
                <Label htmlFor="email">Email</Label>
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
                <Label htmlFor="password">Password</Label>
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
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
