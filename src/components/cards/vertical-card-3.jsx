import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import LinkWithIcon from "../../components/link-with-icon";

//import { ReactComponent as ArrowRightIcon } from "../../icons/arrow-right.svg";

const VerticalCard3 = ({imgUrl, children, buttonText, buttonUrl}) => {
  return (
      <Card className="mt-6 rounded-lg hover:shadow-lg">
      <CardHeader className="relative h-64 rounded-t-lg rounded-b-none overflow-hidden">
        <img src={imgUrl} alt="card-image" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
      <CardFooter className="pt-0">
        <LinkWithIcon text={buttonText} href={buttonUrl} className="mt-4"/>
      </CardFooter>
    </Card>
    );
}

export default VerticalCard3;

