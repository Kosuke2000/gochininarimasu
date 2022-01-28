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
  proceed: () => void;
}

export const Modal: VFC<ModalProps> = ({}) => {
  return <></>;
};
