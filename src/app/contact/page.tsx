'use client'
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";

function contact() {
  return (
    <div className=" m-40">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end">
          <div className=" flex justify-center items-center gap-8 flex-col">
              <h1 className=" py-4 text-5xl text-white"> Contact Us</h1>
              <input className="py-4 bg-gray-600 w-2/4 h-6 rounded-md" type="email" placeholder="Enter your email"></input>
              <input className=" py-4 bg-gray-600 w-2/4 h-24 rounded-md" type="text" placeholder="Enter your Messege"></input>
              <Button className="bg-gray-600 hover:bg-transparent">
                Submit
              </Button>
          </div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
}

export default contact