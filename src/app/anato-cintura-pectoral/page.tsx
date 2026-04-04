"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AnatoIndex() {
  const router = useRouter();
  useEffect(() => { router.replace("/anato-cintura-pectoral/huesos/Escapula"); }, [router]);
  return <div className="flex items-center justify-center h-screen bg-[#121220] text-white">Cargando...</div>;
}
