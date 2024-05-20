import React from "react";

// Global Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/UI/Card/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "components/UI/Tabs/tabs";

// Auth Form Components
import FormLogin from "components/Pages/Auth/formLogin";
import FormRegister from "components/Pages/Auth/formRegister";

// Images / Video
import Video from "assets/video/video.mp4";
import useStoreUser from "state/authUser";

const Login = () => {
  const user = useStoreUser((state: any) => state);

  return (
    <div className="relative h-screen overflow-hidden flex md:justify-center items-center md:px-0">
      <Card className="z-10 h-screen w-full opacity-100 md:w-fit md:h-fit p-4 bg-[#ff0000] rounded-md shadow-xl transition ease-in-out delay-150 duration-200 md:opacity-10 hover:opacity-100 ">
        <Tabs
          defaultValue="account"
          className="w-full md:w-[400px]"
          onValueChange={() => user.changeTab()}
        >
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
              <FormLogin />
            </CardContent>
          </TabsContent>
          <TabsContent value="register">
            <CardHeader>
              <CardTitle className="text-[#fff]">Register</CardTitle>
              <CardDescription className="text-[#fff]">
                Form new user please register.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormRegister />
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>

      <video
        className="w-full h-full absolute object-cover opacity-70"
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Login;
