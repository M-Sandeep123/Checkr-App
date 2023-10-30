import { Stack, SxProps} from "@mui/material";
import AvatarAtom from "../../atoms/AvatarAtom";
import Typography from "../../atoms/TypographyAtom";
import Icon from "../../atoms/Icon";
import LogoutModalBox from "../LogoutModal";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import { TOKEN } from "../../../constants";

export interface NavFooterProps {
  avatarSrc: string;
  avatarAlt: string;
  avatarSx?: SxProps;
  userNameVariant:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption2";
  userName: string;
  userNameSx?: SxProps;
  emailVariant:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption2";
  email: string;
  emailSx: SxProps;
  iconSrc: string;
  iconAlt: string;
  iconStyle?: React.CSSProperties;
}


const NavFooter = ({
  avatarSrc,
  avatarAlt,
  avatarSx,
  userNameVariant,
  userName,
  userNameSx,
  emailVariant,
  email,
  emailSx,
  iconSrc,
  iconAlt,
  iconStyle,
}: NavFooterProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { logout } = useAuth0();

  const handleOnClick = () => {
    setOpenModal(!openModal);
  };

  const handleOnClickLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem(TOKEN);
  };

  return (
    <>
      <LogoutModalBox
        Logoutbuttonlabel="Logout"
        onClickHandle={handleOnClickLogout}
        onCloseHandle={handleOnClick}
        Cancelbuttonlabel="Cancel"
        isOpen={openModal}
      />
      <Stack className="main-layout" direction="row">
        <Stack className="profile-layout" direction="row">
          <AvatarAtom src={avatarSrc} alt={avatarAlt} sx={avatarSx} />

          <Stack direction="column" justifyContent={"center"}>
            <Typography variant={userNameVariant} sx={userNameSx}>
              {userName}
            </Typography>
            <Typography variant={emailVariant} sx={emailSx}>
              {email}
            </Typography>
          </Stack>
        </Stack>

        <Icon
          src={iconSrc}
          alt={iconAlt}
          style={iconStyle}
          onclick={handleOnClick}
        />
      </Stack>
    </>
  );
};

export default NavFooter;
