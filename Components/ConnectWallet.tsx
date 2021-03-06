import Image from "next/image";

export const ConnectWallet = () => {
  const connectWallet = async (e) => {
    window.location.href = `https://app.unlock-protocol.com/checkout?client_id=${window.location.host}&redirect_uri=${window.location.href}`;
  };

  return (
    <div className="border border-gray rounded-lg py-20 md:py-32 flex flex-col justify-center items-center">
      <Image src="/images/wallet.svg" width={242} height={139} alt="wallet" />
      <p className="text-lg my-6">Please connect wallet to get started</p>
      <button
        className="bg-gray text-white font-bold py-3 px-14 rounded-full"
        onClick={connectWallet}
      >
        Connect
      </button>
    </div>
  );
};

export default ConnectWallet;
