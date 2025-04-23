"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
// Note: In a real project, you would need to include the CSS
import "react-phone-input-2/lib/style.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { toast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";

const BookConsultationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    linkedInProfile: "",
    organizationName: "",
    organizationSize: "",
    productServices: "",
    outcomesToAchieve: "",
    challengesFaced: [] as string[],
    bookingDate: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      consent: checked,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      organizationSize: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseJson = await response.json();
      if (responseJson.success) {
        toast({
          description: "Form submitted successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          phone: "",
          linkedInProfile: "",
          organizationName: "",
          organizationSize: "",
          productServices: "",
          outcomesToAchieve: "",
          challengesFaced: [] as string[],
          bookingDate: "",
          consent: false,
        });
      } else {
        toast({
          description: responseJson.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const organizationSizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];

  const challengesFaced = [
    "Automating repetitive tasks",
    "Enhancing customer support",
    "Improving sales and lead generation",
    "Optimizing operations or workIows",
    "Processing and analyzing large datasets",
    "Personalizing customer experiences",
    "Generating or managing content",
    "Predictive analytics and forecasting",
    "Quality control and defect detection",
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white !border-0">
      <CardContent className="pt-6">
        <Dialog>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First row - Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name..."
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name..."
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Second row - Work email */}
            <div className="space-y-2">
              <Label htmlFor="workEmail" className="text-sm font-medium">
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="workEmail"
                name="workEmail"
                type="email"
                placeholder="you@workspace.com"
                value={formData.workEmail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Third row - Phone and LinkedIn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    className:
                      "h-9 w-full rounded-md border border-input bg-transparent !pl-14 px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  }}
                  containerClass="w-full"
                  buttonClass="h-9 bg-gray-50 !rounded-md !rounded-r-none !border !border-input [&>div]:!w-12 [&>div]:!rounded-md [&>div]:!rounded-r-none "
                  dropdownClass="max-h-60 overflow-y-auto shadow-lg border border-gray-300 rounded"
                  searchClass="p-2 border-b border-gray-300"
                  enableSearch={true}
                  disableSearchIcon={false}
                  searchPlaceholder="Search"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="linkedInProfile"
                  className="text-sm font-medium"
                >
                  LinkedIn Profile
                </Label>
                <Input
                  id="linkedInProfile"
                  name="linkedInProfile"
                  placeholder="Enter linkedIn profile link..."
                  value={formData.linkedInProfile}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Fourth row - Organization info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="organizationName"
                  className="text-sm font-medium"
                >
                  Organization Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="organizationName"
                  name="organizationName"
                  placeholder="Enter organization name..."
                  value={formData.organizationName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="organizationSize"
                  className="text-sm font-medium"
                >
                  Organization Size <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.organizationSize}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizationSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Fifth row - Role/Problem */}
            <div className="space-y-2">
              <Label htmlFor="productServices" className="text-sm font-medium">
                Briefly describe your company’s products/services?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="productServices"
                name="productServices"
                placeholder="What problem do you want Ema to solve?"
                value={formData.productServices}
                onChange={handleChange}
                required
                className="min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="outcomesToAchieve"
                className="text-sm font-medium"
              >
                What business outcomes do you hope to achieve by adopting AI
                solutions?
              </Label>
              <Textarea
                id="outcomesToAchieve"
                name="outcomesToAchieve"
                placeholder="What problem do you want Ema to solve?"
                value={formData.outcomesToAchieve}
                onChange={handleChange}
                className="min-h-24"
              />
            </div>

            <div className="space-y-2 relative">
              <Label
                htmlFor="outcomesToAchieve"
                className="text-sm font-medium"
              >
                What specific challenges or pain points are you currently facing
                that you believe AI can address?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <select
                className="opacity-0 absolute bottom-0 right-[50%]"
                required={formData.challengesFaced.length <= 0}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challengesFaced.map((challenge) => (
                  <div key={challenge} className="flex items-center space-x-2">
                    <Checkbox
                      id={challenge}
                      checked={formData.challengesFaced.includes(challenge)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData((prevState) => ({
                            ...prevState,
                            challengesFaced: [
                              ...prevState.challengesFaced,
                              challenge,
                            ],
                          }));
                        } else {
                          setFormData((prevState) => ({
                            ...prevState,
                            challengesFaced: prevState.challengesFaced.filter(
                              (item) => item !== challenge
                            ),
                          }));
                        }
                      }}
                    />
                    <Label htmlFor={challenge} className="text-sm font-medium">
                      {challenge}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xl mb-2">
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 text-xl">
                    Click here
                  </Button>
                </DialogTrigger>{" "}
                to book a call with us.
              </p>
              <Label htmlFor="bookingDate" className="text-sm font-medium">
                What date did you book your call with us for?
              </Label>
              <Input
                id="bookingDate"
                name="bookingDate"
                type="date"
                value={formData.bookingDate}
                onChange={handleChange}
              />

              <DialogContent className="!w-[80vw] h-[80vh] max-w-none flex flex-col bg-white">
                <DialogHeader className="h-fit">
                  <DialogTitle>Book a Demo</DialogTitle>
                </DialogHeader>
                <iframe
                  className="!size-full"
                  src="https://calendar.app.google/cRLqxiusrCuLSxVR9"
                />
              </DialogContent>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
                className="mt-1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-600 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  By clicking submit, you are providing us with your consent to
                  communicate via email or phone, regarding the demo you have
                  requested.
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={!formData.consent || loading}
                className="font-medium py-3 px-8 rounded-full w-48"
              >
                {loading ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Book a Demo"
                )}
              </Button>
            </div>
          </form>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default BookConsultationForm;
