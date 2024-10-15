import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/utils/loading.gif" alt="loading" />
    </div>
  );
}
