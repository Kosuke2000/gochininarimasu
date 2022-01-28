import { VFC } from "react";
import { Member } from "../../types";

interface RankingTableItemProps {
  rank: number;
  member: Member;
}

export const RankingTableItem: VFC<RankingTableItemProps> = ({}) => {
  return (
    <tr>
      <td>１位</td>
      <td>田中</td>
      <td>27</td>
    </tr>
  );
};

interface RankingTableProps {
  members: Member[];
}

export const RankingTable: VFC<RankingTableProps> = ({}) => {
  return (
    <table>
      <tr>
        <th>順位</th>
        <th>名前</th>
        <th>金額</th>
      </tr>
      <tr>
        <td>１位</td>
        <td>田中</td>
        <td>27</td>
      </tr>
      <tr>
        <td>２位</td>
        <td>佐藤</td>
        <td>42</td>
      </tr>
      <tr>
        <td>３位</td>
        <td>佐藤</td>
        <td>42</td>
      </tr>
    </table>
  );
};
