import { useState } from "react";
import { Member, SeidanMemberName, SEIDAN_ALL_MEMBERS } from "./types";

export function useGochi(): [
  Member[],
  (payer: Member, payment: number) => void
] {
  const [members, setMembers] = useState([...SEIDAN_ALL_MEMBERS]);

  const rankedMembers = members.sort((a, b) => b.paidAmount - a.paidAmount);

  const gochi = (payer: Member, payment: number) => {
    // 支払い者とそれ以外を分離

    const notPayers: Member[] = members.filter((member) => member !== payer);
    //　支払い者にpaymentを加算
    payer.paidAmount = payer.paidAmount + payment;
    // stateを更新
    notPayers.push(payer);
    setMembers(notPayers);
  };

  return [rankedMembers, gochi];
}

export const useToggleModal = (): [boolean, () => void, () => void] => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return [isModalOpen, open, close];
};
