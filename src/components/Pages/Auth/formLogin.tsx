import React, { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Components
import { Button } from "components/UI/Button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/UI/Form/form";
import { Input } from "components/UI/Input/input";

// Images / Video
import imgGoogle from "assets/img/google.png";
import imgFacebook from "assets/img/facebook.png";
import useStoreUser from "state/authUser";
import { useTranslation } from "react-i18next";

const FormLogin = () => {
  const { t } = useTranslation();

  const translation = useMemo(
    () => ({
      email: t("translation:email"),
    }),
    [t],
  );

  // const navigate = useNavigate();
  const user = useStoreUser((state: any) => state);

  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("PROPS", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel className="text-[#fff]">
                  {translation.email}
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    defaultValue=""
                    placeholder="Enter Your Email"
                    value={user?.email}
                    onChange={(e) =>
                      user?.onchangeInput(e.target.value, "email")
                    }
                  />
                </FormControl>
                <FormMessage className="text-[#fff]" />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem className="mt-4">
                <FormLabel className="text-[#fff]">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    defaultValue=""
                    placeholder="Enter Your password"
                    value={user?.password}
                    onChange={(e) =>
                      user?.onchangeInput(e.target.value, "password")
                    }
                  />
                </FormControl>
                <FormMessage className="text-[#fff]" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Button type="submit" className="w-full">
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
        </div>
      </form>
    </Form>
  );
};

export default FormLogin;
