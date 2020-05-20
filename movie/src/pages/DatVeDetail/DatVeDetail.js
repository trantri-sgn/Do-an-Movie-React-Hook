import React from "react";

import { useParams } from "react-router-dom";
export default function DatVeDetail() {
  const { maPhim } = useParams();

  return (
    <div>
      <h1>dat ve</h1>
    </div>
  );
}
