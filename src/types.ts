export type Member = {
  name: string;
  paidAmount: number;
};

export type Form = {
  payerName: string;
  sum: number;
};
interface FormProps {
  form: Form;
}
export const SEIDAN_ALL_MEMBERS: Member[] = [
  { name: "Hajime", paidAmount: 1800 + 10736 + 1530 },
  { name: "Hiromu", paidAmount: 10390 },
  { name: "Kosuke", paidAmount: 10060 },
];

export type SeidanMemberName = typeof SEIDAN_ALL_MEMBERS[number]["name"];
