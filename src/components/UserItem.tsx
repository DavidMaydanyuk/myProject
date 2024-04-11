import { FC } from "react";
import { IUser } from "../Types/Types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}.{user.name} lives in: {user.address.city} on a{" "}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
