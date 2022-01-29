import { useState } from "react";
import { Member, SeidanMemberName, SEIDAN_ALL_MEMBERS } from "./types";

export function useGochi(): [
  Member[],
  (payerName: SeidanMemberName, payment: number) => void
] {
  const [members, setMembers] = useState([...SEIDAN_ALL_MEMBERS]);

  const rankedMembers = members.sort((a, b) => b.paidAmount - a.paidAmount);

  const gochi = (payerName: SeidanMemberName, payment: number) => {
    // 支払い者とそれ以外を分離
    const payer: Member = members.filter(
      (member) => member.name === payerName
    )[0];
    const notPayers: Member[] = members.filter(
      (member) => member.name !== payerName
    );
    //　支払い者にpaymentを加算
    payer.paidAmount = payer.paidAmount + payment;
    // stateを更新
    notPayers.push(payer);
    setMembers(notPayers);
  };

  return [rankedMembers, gochi];
}
