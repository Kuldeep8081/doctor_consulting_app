// zegocloud.d.ts
declare module "@zegocloud/zego-uikit-prebuilt-call-rn" {
  import * as React from "react";

  export interface ZegoUIKitPrebuiltCallProps {
    appID: number;
    appSign: string;
    userID: string;
    userName: string;
    callID: string;
    config?: any;
  }

  export const ZegoUIKitPrebuiltCall: React.ComponentType<ZegoUIKitPrebuiltCallProps>;

  // You can refine this later if you want stricter typing
  export const ONE_ON_ONE_VIDEO_CALL_CONFIG: any;
}
