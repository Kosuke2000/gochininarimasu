import { useState } from "react";
import { Member, SEIDAN_ALL_MEMBERS } from "./types";

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

type UsePayment = () => [
  number,
  (e: React.ChangeEvent<HTMLInputElement>) => void
  // () => void
];

export const usePayment: UsePayment = () => {
  const [payment, setPayment] = useState(0);

  const changePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(Number(e.target.value));
  };

  // const reset = () => {
  //   setPayment(0);
  // };

  return [payment, changePayment];
};
