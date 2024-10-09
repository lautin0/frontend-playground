import { CardDemo } from "@/components/card-demo";
import { DatePicker } from "@/components/date-picker";
import Layout from "@/components/layout";

export default function Components() {
    return <Layout>
        <div className="mt-3 flex flex-col gap-2">
            Hello World
            <DatePicker />
            <CardDemo />
        </div>
    </Layout>
}