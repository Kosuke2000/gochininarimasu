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
  const { nickname, paidAmount } = member;

  return (
    <tr>
      <td>{rank + 1}位</td>
      <td>{nickname}</td>
      <td>{paidAmount}</td>
    </tr>
  );
};

interface RankingTableProps {
  members: Member[];
}

export const RankingTable: VFC<RankingTableProps> = ({ members }) => {
  return (
    <table>
      <tr>
        <th>順位</th>
        <th>名前</th>
        <th>金額</th>
      </tr>
      {members.map((member, i) => (
        <RankingTableItem key={member.nickname} member={member} rank={i} />
      ))}
    </table>
  );
};
