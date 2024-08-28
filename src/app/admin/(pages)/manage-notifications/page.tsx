import React from "react";
import AdminNav from "../../components/AdminNav";
import MainNotify from "./MainNotify";
import AdminMainNav from "../../components/AdminMainNav";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex">
      <AdminNav route="Notifications" />
      <div className="w-full dh-bg">
        <AdminMainNav />
        <MainNotify />
      </div>
    </main>
  );
}
