import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
 
export function BackgroundCard({imgUrl, title, subtitle, downloadUrl}) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center h-80"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none hover:scale-105 transition-transform"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/30" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]" >
          {title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-white">
           {subtitle}
        </Typography>

        <a href={downloadUrl} className="inline-block">
                  <Button variant="text" className="flex items-center gap-2 text-white">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
       
      </CardBody>
    </Card>
  );

   /*
        <Avatar
          size="sm"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://docs.material-tailwind.com/img/face-2.jpg"
        />
        */
}