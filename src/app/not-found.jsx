import Link from "next/link";

const notFound = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-white flex-col gap-6 text-black">
            <h1 className="text-9xl font-bold">404</h1>
            <p>Not Founded page</p>
            <button className="btn btn-success"><Link href='/'>Go to homepage</Link></button>
        </div>
    );
};

export default notFound;