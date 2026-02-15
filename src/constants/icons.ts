import commentLight from "@/assets/images/comment/commentLight.svg";
import commentDark from "@/assets/images/comment/commentDark.svg";
import likeLight from "@/assets/images/like/likeLight.svg";
import likeDark from "@/assets/images/like/likeDark.svg";
import crossLight from "@/assets/images/cross/crossLight.svg";
import crossDark from "@/assets/images/cross/crossDark.svg";
import dropDownLight from "@/assets/images/dropDown/dropDownLight.svg";
import dropDownDark from "@/assets/images/dropDown/dropDownDark.svg";
import emailLight from "@/assets/images/email/emailLight.svg";
import emailDark from "@/assets/images/email/emailDark.svg";
import eyeLight from "@/assets/images/eye/eyeLight.svg";
import eyeDark from "@/assets/images/eye/eyeDark.svg";
import eyeCrossedLight from '@/assets/images/eyeCrossed/eyeCrossedLight.svg';
import eyeCrossedDark from '@/assets/images/eyeCrossed/eyeCrossedDark.svg';
import notFoundLight from "@/assets/images/notFound/notFoundLight.svg";
import notFoundDark from "@/assets/images/notFound/notFoundDark.svg";
import writeLight from "@/assets/images/write/writeLight.svg";
import writeDark from "@/assets/images/write/writeDark.svg";
import keyboardLight from "@/assets/images/keyboard/keyboardLight.svg";
import keyboardDark from "@/assets/images/keyboard/keyboardDark.svg";
import infoRed from "@/assets/images/info/infoRed.svg";
import checkOrange from "@/assets/images/check/checkOrange.svg";
import crossRed from "@/assets/images/redCross/crossRed.svg";
import thumbsUpOrange from "@/assets/images/thumbUpOrange/thumbUpOrange.svg";

export const ICONS = {
   comment: { light: commentLight, dark: commentDark },
   like: { light: likeLight, dark: likeDark },
   cross: { light: crossLight, dark: crossDark },
   dropDown: { light: dropDownLight, dark: dropDownDark },
   email: { light: emailLight, dark: emailDark },
   eye: { light: eyeLight, dark: eyeDark },
   eyeCrossed: { light: eyeCrossedLight, dark: eyeCrossedDark },
   notFound: { light: notFoundLight, dark: notFoundDark },
   write: { light: writeLight, dark: writeDark },
   keyboard: { light: keyboardLight, dark: keyboardDark },
   info: { light: infoRed, dark: infoRed },
   crossRed: { light: crossRed, dark: crossRed },
   check: { light: checkOrange, dark: checkOrange },
   thumbsUp: { light: thumbsUpOrange, dark: thumbsUpOrange },
} as const;

export type IconName = keyof typeof ICONS;
