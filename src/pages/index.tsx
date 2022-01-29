import type { NextPage } from "next";
import Head from "next/head";
import { useGochi, usePayment, useToggleModal } from "../hooks";
import { Modal } from "../components/Modal";
import { RankingTable } from "../components/RankingTable";

/*
  X: RankingTable
  A: おごりロジック
  B: モーダル
*/

const Home: NextPage = () => {
  const [rankedMembers, gochi] = useGochi();
  const [isModalOpen, open, close] = useToggleModal();
  const [payment, changePayment] = usePayment();

  const r = Math.floor(Math.random() * rankedMembers.length);
  const payer = rankedMembers[r];

  const onProceed = () => {
    gochi(payer, payment);
  };

  return (
    <>
      <div className="">
        <Head>
          <title>Gochi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col justify-center items-center w-screen h-screen dark:dark:bg-slate-900">
          <div className="flex flex-col justify-around h-2/5">
            <h1 className="text-4xl text-center dark:text-white">
              福岡男気レース
            </h1>
            <div className="flex justify-center items-center ">
              <p className="dark:text-white">今回のお支払いは、</p>
              <input
                type="number"
                onChange={changePayment}
                className="py-2 px-3 leading-tight text-yellow-300 dark:text-yellow-500 dark:dark:bg-slate-500 rounded border dark:border-slate-800 focus:outline-none shadow appearance-none"
                placeholder="0"
              />
              <p className="dark:text-white">円</p>
            </div>
            <div className="flex justify-around w-full">
              <button
                onClick={open}
                className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded"
              >
                支払いはオレだ！
              </button>
            </div>
          </div>
          <RankingTable members={rankedMembers} />
        </main>
      </div>
      {isModalOpen && (
        <Modal member={payer} close={close} onProceed={onProceed} />
      )}
    </>
  );
};

export default Home;
