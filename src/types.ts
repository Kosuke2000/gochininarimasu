export type Member = {
  nickname: string;
  paidAmount: number;
};

export const SEIDAN_ALL_MEMBERS: Member[] = [
  { nickname: "Hajime", paidAmount: 0 },
  { nickname: "Hiromu", paidAmount: 10 },
  { nickname: "Kosuke", paidAmount: 100 },
];
