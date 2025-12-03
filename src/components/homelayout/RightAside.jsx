import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import FindUsOn from "./FindUsOn";
import Qzone from "./Qzone";
import { AuthContext } from "../../provider/AuthProvider";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      {
        user && user.email ? "" : <SocialLogin />
      }
      <FindUsOn />
      <Qzone />
    </div>
  );
};

export default RightAside;
