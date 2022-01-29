import type { NextPage } from "next";
import Head from "next/head";
import { useGochi, usePayment, useToggleModal } from "../hooks";
import { Modal } from "./components/Modal";
import { RankingTable } from "./components/RankingTable";

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

  return (
    <>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>おごる担当はだれ？</h1>
          <input type="text" placeholder="おごる人" />
          <button onClick={open}>この人！</button>
          <h1>金額：{payment}</h1>

          <input type="number" onChange={changePayment} />
          <input type="text" placeholder="追加メンバー" />

          <RankingTable members={rankedMembers} />
        </main>
      </div>
      {isModalOpen && (
        <Modal
          member={payer}
          close={close}
          onProceed={() => gochi(payer, payment)}
        />
      )}
    </>
  );
};

export default Home;
