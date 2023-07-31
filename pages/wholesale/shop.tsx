import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import WholeSaleList from "@/components/WholeSaleList";

const Wholesale = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/wholesale/login");
        return;
      }

      const response = await fetch("/api/validate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        localStorage.removeItem("token");
        router.push("/wholesale/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div>
      <Layout>
        <div className='flex flex-col items-center justify-center min-h-screen text-center py-20'>
          <h1 className=' font-ElCaminoTextureCaps text-4xl font-bold mb-4'>
            Wholesale customers
          </h1>
          <WholeSaleList />
        </div>
      </Layout>
    </div>
  );
};

export default Wholesale;
