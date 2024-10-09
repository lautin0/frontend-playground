import Layout from "@/components/layout";
import { NextPageContext } from "next";

Data.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default function Data({ stars }: { stars: number }) {
    return <Layout>Stars: {stars}</Layout>
}