import { VFC } from "react";
import { Member } from "../../types";

/*
 - 全体に薄く広がる暗めの背景
   - タッチするとモーダルはキャンセルとして閉じる
 - 画面の真ん中に表示されるモーダル
   - ゴチの人の名前
   - その人の現在の金額
   - キャンセルボタン (close)
   - ゴチボタン (proceed)
*/

interface ModalProps {
  member: Member;
  close: () => void;
  onProceed: () => void;
}

export const Modal: VFC<ModalProps> = ({ member, close, onProceed }) => {
  const { name, paidAmount } = member;

  const proceed = () => {
    onProceed();
    close();
  };

  return (
    <div className="flex absolute top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75 dark:dark:bg-slate-500/75">
      <div className="flex flex-col justify-center p-4 w-4/5 h-1/2 bg-white dark:bg-slate-900 rounded shadow opacity-100 md:w-1/2">
        <div className="flex flex-col justify-between items-center p-4 h-3/5">
          <h1 className="text-4xl dark:text-white">{name}さん</h1>
          <p className="dark:text-white">ごちになります!!!</p>
          <p className="dark:text-white">{name}さんの現在の金額</p>
          <p className="pb-4 dark:text-white">
            <span className="text-6xl">{paidAmount}</span>円
          </p>
        </div>

        <div className="flex justify-around w-full">
          <button
            onClick={close}
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300"
          >
            キャンセル
          </button>
          <button
            onClick={proceed}
            className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded"
          >
            ゴチボタン
          </button>
        </div>
      </div>
    </div>
  );
};
