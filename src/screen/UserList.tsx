import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userListActions from "../store/actions/UserListActions";
import { IUserStatesAction } from "../model/payload/User";
import { Button, TextField } from "@mui/material";
import { User } from "../model/reducer/User";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface IUserState {
  userListReducers: IUserStatesAction;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserList: React.FC = () => {
  const [state, setState] = useState({
    id: 0,
    name: "",
    avatar: "",
    password: "",
    open: false,
  });

  const handleChange =
    (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [prop]: e.target.value });
    };

  const dispatch = useDispatch();

  const users = useSelector(
    (state: IUserState) => state.userListReducers.users
  );

  const DeleteItem = (id: number) => {
    console.log("delete: " + id);
    dispatch(userListActions.deleteItem(id));
  };

  const AddItem = () => {
    let user: User = {
      id: state.id,
      avatar: state.avatar,
      name: state.name,
      password: state.password,
    };
    dispatch(userListActions.addItem(user));
    handleClose();
  };

  const FindUser = () => {
    dispatch(userListActions.searchItem(state.name));
  };

  const LoadPage = () => {
    let user: Array<User> = [
      {
        id: 4,
        avatar:
          "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        name: "Minhnv 4",
        password: "Password",
      },
      {
        id: 5,
        avatar:
          "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat.jpg",
        name: "Minhnv 5",
        password: "Password",
      },
      {
        id: 6,
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        name: "Minhnv 6",
        password: "Password",
      },
      {
        id: 7,
        avatar:
          "https://i.pinimg.com/736x/b4/a3/5b/b4a35b768e6ad75b184f2e104d9eb650.jpg",
        name: "Minhnv 7",
        password: "Password",
      },
    ];
    dispatch(userListActions.loadPage(user))
  }

  const fetchUser = () => {
    let user: Array<User> = [
      {
        id: 0,
        avatar:
          "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        name: "Minhnv",
        password: "Password",
      },
      {
        id: 1,
        avatar:
          "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat.jpg",
        name: "Minhnv 1",
        password: "Password",
      },
      {
        id: 2,
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        name: "Minhnv 2",
        password: "Password",
      },
      {
        id: 3,
        avatar:
          "https://i.pinimg.com/736x/b4/a3/5b/b4a35b768e6ad75b184f2e104d9eb650.jpg",
        name: "Minhnv 3",
        password: "Password",
      },
    ];
    dispatch(userListActions.fetchList(user));
  };

  const handleOpen = () => setState({ ...state, open: true });
  const handleClose = () => setState({ ...state, open: false });

  const doGetList = () => {
    dispatch(userListActions.doFetchListUser())
  }
  
  return (
    <div>
      <Button onClick={doGetList}>Call API get list user</Button>
      <TextField
        id="outlined-multiline-flexible"
        label="name"
        multiline
        maxRows={4}
        value={state.name}
        onChange={handleChange("name")}
      />
      <Button onClick={FindUser}>Search</Button>
      <Button onClick={fetchUser}>Fetch User</Button>
      <Modal
        open={state.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-multiline-flexible"
            label="id"
            multiline
            maxRows={4}
            value={state.id}
            onChange={handleChange("id")}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="avatar"
            multiline
            maxRows={4}
            value={state.avatar}
            onChange={handleChange("avatar")}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="name"
            multiline
            maxRows={4}
            value={state.name}
            onChange={handleChange("name")}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="password"
            multiline
            maxRows={4}
            value={state.password}
            onChange={handleChange("password")}
          />
          <br />
          <Button onClick={AddItem}>Insert</Button>
        </Box>
      </Modal>
      <Button onClick={handleOpen}>Insert User</Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user) => (
          <Fragment key={user.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <React.Fragment>
                    {user.password}
                    <Button onClick={() => DeleteItem(user.id)}>Delete</Button>
                    <Button>Edit</Button>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      <Stack spacing={2}>
        <Pagination count={10} onClick={LoadPage}/>
      </Stack>
    </div>
  );
};

export default UserList;
