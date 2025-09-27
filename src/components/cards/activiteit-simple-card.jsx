import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import LinkWithIcon from "../../components/link-with-icon";
 
export function ActiviteitSimpleCard({id, titel, datum, excerpt, link, location, isFeatured}) {
  return (
    <Card key={id} className={`rounded-lg hover:shadow-lg ${isFeatured ? 'bg-pink-200' : '' }`}>
      <CardBody key={id}>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {titel}
        </Typography>
        <Typography variant="h6" className="text-gray-500 mb-2 italic">
          {datum}
        </Typography>
        <Typography variant="h6" className="text-gray-400 mb-2">
          {location}
        </Typography>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </CardBody>
      <CardFooter className="">
        <LinkWithIcon text={`Lees meer`} href={`/activiteiten/${link}`} />
      </CardFooter>
    </Card>
  );
}