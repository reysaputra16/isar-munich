import Link from "next/link";

const EmailRegisteredPage = () => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <div className="w-full mt-10 flex-center p-3 border-2 border-red-500 bg-red-200 text-red-700 font-satoshi rounded-full">
        E-Mail is already assigned to an existing user.
      </div>
      <button
        type="button"
        className="mt-10 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
      >
        <Link href="/register">Try Again</Link>
      </button>
    </section>
  );
};

export default EmailRegisteredPage;
