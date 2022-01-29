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
    <div className="flex absolute top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200 opacity-80">
      <div className="flex flex-col justify-around p-4 w-1/2 h-1/2 bg-white opacity-100">
        <div className="flex flex-col justify-around items-center h-1/2">
          <h1 className="text-4xl">{name}さん</h1>
          <p>ごちになります!!!</p>
          <p>
            {name}さんの現在の金額：{paidAmount}円
          </p>
        </div>

        <div className="flex justify-around w-full">
          <button
            onClick={close}
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent"
          >
            キャンセル
          </button>
          <button
            onClick={proceed}
            className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded"
          >
            ゴチボタン
          </button>
        </div>
      </div>
    </div>
  );
};
