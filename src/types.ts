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
  { name: "Hajime", paidAmount: 0 },
  { name: "Hiromu", paidAmount: 10 },
  { name: "Kosuke", paidAmount: 100 },
];

export type SeidanMemberName = typeof SEIDAN_ALL_MEMBERS[number]["name"];
