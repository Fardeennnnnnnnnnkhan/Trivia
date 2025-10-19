"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/app/lib/schema";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { industries } from "@/data/industries";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/usefetch";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import { Loader, Loader2 } from "lucide-react";
const OnBoardingForm = () => {
  const [selectedIndustry, setselectedIndustry] = useState(null);
  const router = useRouter();

  // using custom hook useFetch
  const {
    loading :updateLoading,
     fn : updateUserFn ,
      data:updateResult,
  } = useFetch(updateUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });
  const watchIndustry = watch("industry");

  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry.toLowerCase().replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry:formattedIndustry
      })
    }catch(err){}
  };

  useEffect(() => {
   if(updateResult?.success && !updateLoading){
    toast.success("Profile Completed Successfully");
    router.push("/dashboard");
    
    router.refresh();
   }

  }, [updateResult , updateLoading])
  return (
    <div className="flex justify-center items-center bg-transparent">
      <Card className="w-full max-w-lg mt-10 mx-2 ">
        <CardHeader className="">
          <CardTitle className="gradient-title-small">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your Industry to get personalized career insights and
            recommdations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            action=""
          >
            {/* Industry */}
            <div className="space-y-2">
              <Label className="mb-2" htmlFor="industry">
                Industry
              </Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setselectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry" className="">
                  <SelectValue placeholder=" Select an Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => {
                    return (
                      <SelectItem key={industry.id} value={industry.id}>
                        {industry.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {errors.industry && <p>{errors.industry.message}</p>}
            </div>
            {/*Sub-Industry */}

            {watchIndustry && (
              <div className="space-y-2">
                <Label className="mb-2" htmlFor="subIndustry">
                  Specialization
                </Label>
                <Select
                  onValueChange={(value) => {
                    setValue("subIndustry", value);
                  }}
                >
                  <SelectTrigger id="subIndustry" className="">
                    <SelectValue placeholder=" Select an SubIndustry" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedIndustry?.subIndustries.map((ind) => {
                      return (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                {errors.subIndustry && <p>{errors.subIndustry.message}</p>}
              </div>
            )}
            {/*Experience */}

            {watchIndustry && (
              <div className="space-y-2">
                <Label className="mb-2" htmlFor="experience">
                  Years of Experience
                </Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="Enter Years of Experience"
                  {...register("experience")}
                />
                {errors.experience && <p>{errors.experience.message}</p>}
              </div>
            )}
            {/* Skills */}
            {watchIndustry && (
              <div className="space-y-2">
                <Label className="mb-2" htmlFor="skills">
                  Skills
                </Label>
                <Input
                  id="skills"
                  placeholder="Python , Javascript , Project Management..."
                  {...register("skills")}
                />
                <p className="text-sm text-muted-foreground">
                  Separate Multiple Skills with Commas
                </p>
                {errors.skills && <p>{errors.skills.message}</p>}
              </div>
            )}

            {/* Bio */}
            {watchIndustry && (
              <div className="space-y-2">
                <Label className="mb-2" htmlFor="bio">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  className="h-32"
                  placeholder="Tell us about your professional background"
                  {...register("bio")}
                />
                {errors.bio && <p>{errors.bio.message}</p>}
              </div>
            )}
            {
              updateLoading ? (
                <>
                <div className="mx-auto flex items-center justify-center">

                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Saving...

                </div>
                </>
              ) :(
            <Button type="submit" className="w-full">
            Complete Profile
            </Button>
              )
            }
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnBoardingForm;
