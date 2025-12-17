import * as React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import LinkWithIcon from "../link-with-icon";
import DebugLogger from "../debug-logger";

import { GatsbyImage, getImage } from "gatsby-plugin-image"

//import { MyLinkWithIcon } from "../link-with-icon";
 
export function HorizontalCard({imgUrl, image, cardHeaderTitle, contentTitle, content, linkText, linkUrl, children }) {
  return (
    <Card className="w-full max-w-[96rem] flex-row">
     <CardHeader shadow={false} floated={false} className="m-0 w-2/5 max-h-100 shrink-0 rounded-r-none">
        { image && <GatsbyImage image={getImage(image)} alt="card-image" className="h-full w-full object-cover" /> }
        { imgUrl && <img src={imgUrl} alt="card-image" className="h-full w-full object-cover" /> }
      </CardHeader>
      <CardBody className="m-0 w-3/5" >
        { cardHeaderTitle &&
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {cardHeaderTitle}
            </Typography>
        }
        {contentTitle && 
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {contentTitle}
            </Typography>
        } 
        {children ? children : content && <Typography  variant="h6" color="gray">{content}</Typography>}
    
        <LinkWithIcon text={linkText} href={linkUrl} />
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
  );
}