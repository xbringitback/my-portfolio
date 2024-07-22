"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";

import { info, InfoItem } from "@/lib/constants";

const Contact: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="mx-auto">
            <div className="flex-1 flex items-center mb-8">
              <ul>
                {info.map((item: InfoItem) => (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-accent">{item.title}</h4>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let`s work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select please..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select please...</SelectLabel>
                    <SelectItem value="est">Offer a Full-time Job</SelectItem>
                    <SelectItem value="cst">Design</SelectItem>
                    <SelectItem value="mst">Web Development</SelectItem>
                    <SelectItem value="lst">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Type your message here."
                className="h-[150px]"
              />
              <Button size="sm" className="max-w-40 py-2.5">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
