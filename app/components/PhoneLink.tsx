"use client";

import type { ComponentPropsWithoutRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import {
  DISPLAYED_PHONE_NUMBER,
  PHONE_NUMBER,
} from "@/app/constants/common";

type PhoneLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  phoneNumber?: string;
  children?: React.ReactNode;
};

export function PhoneLink({
  phoneNumber = PHONE_NUMBER,
  children,
  onClick,
  ...props
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      {...props}
      onClick={(event) => {
        sendGAEvent("event", "phone_click", { method: "tel" });
        onClick?.(event);
      }}
    >
      {children ?? DISPLAYED_PHONE_NUMBER}
    </a>
  );
}
