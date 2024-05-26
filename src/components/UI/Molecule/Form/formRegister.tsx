import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Global Components
import { Button } from "components/UI/Atoms/Button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/UI/Atoms/Form/form";
import { Input } from "components/UI/Atoms/Input/input";

// Images / Video
import imgGoogle from "assets/img/google.png";
import imgFacebook from "assets/img/facebook.png";
import useStoreUser from "state/authUser";

const FormRegister = () => {
  const { t } = useTranslation();
  const translation = useMemo(
    () => ({
      email: t("translation:email"),
      firstName: t("translation:firstName"),
      lastName: t("translation:lastName"),
      placeholderEmail: t("translation:placeholderEmail"),
      placeholderLastName: t("translation:placeholderLastName"),
      placeholderFirstName: t("translation:placeholderFirstName"),
      password: t("translation:password"),
      placeholderPassword: t("translation:placeholderPassword"),
      signUp: t("translation:signUp"),
      signUpWithGoogle: t("translation:signUpWithGoogle"),
      signUpWithFacebook: t("translation:signUpWithFacebook"),
    }),
    [t],
  );
  // const navigate = useNavigate();
  const user = useStoreUser((state: any) => state);

  const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().min(2).max(50),
    password: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
        <div className="flex-col flex gap-4 md:flex-row md:justify-center md:items-center ">
          <div className="space-y-1">
            <FormField
              control={form.control}
              name="firstName"
              render={() => (
                <FormItem>
                  <FormLabel className="text-[#fff]">
                    {translation.firstName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="firstName"
                      type="firstName"
                      defaultValue=""
                      placeholder={translation.placeholderFirstName}
                      value={user?.firstName}
                      onChange={(e) =>
                        user?.onchangeInput(e.target.value, "firstName")
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
              name="lastName"
              render={() => (
                <FormItem>
                  <FormLabel className="text-[#fff]">
                    {translation.lastName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="lastName"
                      type="lastName"
                      defaultValue=""
                      placeholder={translation.placeholderLastName}
                      value={user?.lastName}
                      onChange={(e) =>
                        user?.onchangeInput(e.target.value, "lastName")
                      }
                    />
                  </FormControl>
                  <FormMessage className="text-[#fff]" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem className="mt-4">
                <FormLabel className="text-[#fff]">
                  {translation.email}
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    defaultValue=""
                    placeholder={translation.placeholderEmail}
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
                <FormLabel className="text-[#fff]">
                  {translation.password}
                </FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    defaultValue=""
                    placeholder={translation.placeholderEmail}
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
          <Button
            type="submit"
            className="w-full bg-[#fbd743] text-white"
            variant="outline"
          >
            {translation.signUp}
          </Button>

          {/* Login Google */}
          <Button className="w-full relative gap-2 bg-white" variant="outline">
            <img src={imgGoogle} className="img-social-media" />
            <p className="text-black">{translation.signUpWithGoogle}</p>
          </Button>

          {/* Login With Facebook */}
          <Button className="w-full relative gap-2 bg-white" variant="outline">
            <img src={imgFacebook} className="img-social-media" />
            <p className="text-black">{translation.signUpWithFacebook}</p>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormRegister;
