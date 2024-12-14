import Card from "@/components/card";
import Link from "next/link";

export default function Archieved(){
    return (
    <Card>
    <div> Archieved Notifications</div>
    <Link href="/complex-dashboard/">Default</Link>
    </Card>
    );
}