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

export const SEIDAN_FORMS0 = { payerName: "Hajime", sum: 500 };
export const SEIDAN_FORMS1 = { payerName: "Hiromu", sum: 500 };
export const SEIDAN_FORMS2 = { payerName: "Kosuke", sum: 500 };

export const forms0 = SEIDAN_FORMS0;
export const forms1 = SEIDAN_FORMS1;
export const forms2 = SEIDAN_FORMS2;
