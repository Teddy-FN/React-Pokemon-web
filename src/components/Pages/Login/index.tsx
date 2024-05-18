import React from "react";
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

// Images
import imgGoogle from "../../../assets/img/google.png";
import imgFacebook from "../../../assets/img/facebook.png";
import "./style.css";

import useStoreUser from "../../../state/authUser";

const Login = () => {
  const navigate = useNavigate();
  const user = useStoreUser((state: any) => state);

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
                  value={user?.email}
                  onChange={(e) => user?.onchangeInput(e.target.value, "email")}
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
                  value={user.password}
                  onChange={(e) =>
                    user?.onchangeInput(e.target.value, "password")
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button onClick={() => navigate("/")} className="w-full">
                Log in
              </Button>

              {/* Login Google */}
              <Button className="w-full relative gap-2 bg-white">
                <img src={imgGoogle} className="img-social-media" />
                <p className="text-black">Log In With Google</p>
              </Button>

              {/* Login With Facebook */}
              <Button className="w-full relative gap-2 bg-white">
                <img src={imgFacebook} className="img-social-media" />
                <p className="text-black">Log In With Facebook</p>
              </Button>
            </CardFooter>
          </TabsContent>
          <TabsContent value="register">
            <CardHeader>
              <CardTitle className="text-[#fff]">Register</CardTitle>
              <CardDescription className="text-[#fff]">
                Form new user please register.
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
                    value={user.firstName}
                    onChange={(e) =>
                      user?.onchangeInput(e.target.value, "firstName")
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
                    value={user.lastName}
                    onChange={(e) =>
                      user?.onchangeInput(e.target.value, "lastName")
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
                  value={user.email}
                  onChange={(e) => user?.onchangeInput(e.target.value, "email")}
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
                  value={user.password}
                  onChange={(e) =>
                    user?.onchangeInput(e.target.value, "password")
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full">Sign Up</Button>

              {/* SignUp Google */}
              <Button className="w-full relative gap-2 bg-white">
                <img src={imgGoogle} className="img-social-media" />
                <p className="text-black">Sign Up With Google</p>
              </Button>

              {/* Sign Up Facebook */}
              <Button className="w-full relative gap-2 bg-white">
                <img src={imgFacebook} className="img-social-media" />
                <p className="text-black">Sign Up With Facebook</p>
              </Button>
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
