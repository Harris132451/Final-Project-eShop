import React from "react";
import { Tooltip } from "react-tooltip";

function handleOnClick(code) {
  navigator.clipboard.writeText(code).then();
}

export default function PromotionBlock() {
  return (
    <>
      <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full mt-8">
        <div className="rounded-lg flex justify-center items-baseline flex-col space-y-4 md:flex-row md:space-x-4 ">
          <div
            className="tooltip mx-auto hover:-translate-y-2"
            onClick={() => handleOnClick("PNSAPP")}
          >
            <img
              src="https://api.pns.hk/medias/MB-PNSAPP-20231231-E.png?context=bWFzdGVyfGltYWdlc3wxOTA0MnxpbWFnZS9wbmd8YURjekwyZzBNeTh4TURJME16YzRPRE0zTkRBME5pOU5RbDlRVGxOQlVGQmZNakF5TXpFeU16RmZSUzV3Ym1jfGI1NjU5MmQ4ZWVkZGUyNDJiNWEwOGY4NWUyNTZhNTUxZWFhNzA4ZTkxNmYwZDdkMzYyMDBlNzY2MGQ1Zjk0MzM"
              alt="promotion1"
            />
          </div>
          <div
            className="tooltip mx-auto hover:-translate-y-2"
            onClick={() => handleOnClick("APRCNC")}
          >
            <img
              src="https://api.pns.hk/medias/MB-Food-APRCNC-20240430-E.png?context=bWFzdGVyfGltYWdlc3w5MTA3fGltYWdlL3BuZ3xhR1V5TDJobE1pOHhNRFl5TkRFeU1UWTJOell4TkM5TlFsOUdiMjlrWDBGUVVrTk9RMTh5TURJME1EUXpNRjlGTG5CdVp3fGFjNDg5ZDYyNTM5ZTQ2Y2EzYmM5MzYxY2ZlMWVmYjhhY2M0MGNiZGI1MjQ4ZTJjMzNkOWQ4YTEyZTZhNGIyOTM"
              alt="promotion2"
            />
          </div>
          <div
            className="tooltip mx-auto hover:-translate-y-2"
            onClick={() => handleOnClick("APRHD")}
          >
            <img
              src="https://api.pns.hk/medias/MB-Food-APRHD-20240430-E.png?context=bWFzdGVyfGltYWdlc3w4MDA4fGltYWdlL3BuZ3xhR0l6TDJobE9TOHhNRFl5TkRFeU1UZzJOREl5TWk5TlFsOUdiMjlrWDBGUVVraEVYekl3TWpRd05ETXdYMFV1Y0c1bnw2OGFlMjcxNGRjMmNiN2ZkYjdiNjA2OWZlZGExOThhN2E2ZDk5NTY3YjEyNGRlODFiMjRmOWMzNmQ3NjA3Mzcw"
              alt="promotion3"
            />
          </div>
        </div>
      </div>
      <Tooltip
        anchorSelect=".tooltip"
        content="Click to copy code"
        noArrow="true"
      ></Tooltip>
    </>
  );
}
