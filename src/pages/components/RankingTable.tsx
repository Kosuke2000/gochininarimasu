import { VFC } from "react";
import { Member } from "../../types";

interface RankingTableItemProps {
  rank: number;
  member: Member;
}

export const RankingTableItem: VFC<RankingTableItemProps> = ({
  rank,
  member,
}) => {
  const { name, paidAmount } = member;

  return (
    <tr className="bg-white dark:bg-slate-500 border-b dark:border-white">
      <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {rank + 1}位
      </td>
      <td className="py-4 px-6 text-sm font-light text-gray-900 dark:text-white whitespace-nowrap">
        {name}
      </td>
      <td className="dark:text-white">{paidAmount}</td>
    </tr>
  );
};

interface RankingTableProps {
  members: Member[];
}

export const RankingTable: VFC<RankingTableProps> = ({ members }) => {
  return (
    <div className="p-8 max-w-md">
      <table className="min-w-full text-center">
        <thead className=" bg-gray-50 dark:bg-slate-700 border-b dark:border-slate-500">
          <tr>
            <th className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
              順位
            </th>
            <th className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
              名前
            </th>
            <th className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
              金額
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <RankingTableItem key={member.name} member={member} rank={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
