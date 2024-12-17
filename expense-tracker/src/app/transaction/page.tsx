import Link from "next/link";
const Transaction = () => (
    <div>
        <h1>income</h1>
        <h1>expense</h1>
        <h1>balance</h1>
        <Link href="/add-transaction">ADD TRANSACTION</Link>
    </div>
)
export default Transaction;