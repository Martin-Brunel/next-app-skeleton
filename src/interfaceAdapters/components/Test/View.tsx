"use client";

import { User } from "@/domain/entities/user";

type Props = {
  text: string;
  onClickButton: VoidFunction;
  users: User[];
};

const View: React.FC<Props> = ({ text, onClickButton, users }) => {
  return (
    <div>
      <h1>haaaa haaa: {text}</h1>
      <button onClick={onClickButton}>change text</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default View;
