import React from "react";

// Icons
import UserPhoto from "assets/img/profile.png";

// Components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "components/UI/Atoms/Avatar/avatar";

import { Skeleton } from "components/UI/Atoms/Skeleton/skeleton";

const AvatarUser = () => {
  return (
    <Avatar>
      <AvatarImage
        src={UserPhoto}
        accessKey="user"
        loading="eager"
        alt="photoUser"
        className="rounded-full"
      />
      <AvatarFallback>
        <Skeleton className="h-12 w-12 rounded-full" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarUser;
