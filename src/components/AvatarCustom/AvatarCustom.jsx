import Avatar from "@mui/material/Avatar";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#673dff",
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export const AvatarCustom = ({ name }) => {
  if (name) {
    return <Avatar {...stringAvatar(name)} />;
  }

  return;
};
