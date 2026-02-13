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
import notFoundLight from "@/assets/images/notFound/notFoundLight.svg";
import notFoundDark from "@/assets/images/notFound/notFoundDark.svg";
import writeLight from "@/assets/images/write/writeLight.svg";
import writeDark from "@/assets/images/write/writeDark.svg";

export const ICONS = {
   comment: { light: commentLight, dark: commentDark },
   like: { light: likeLight, dark: likeDark },
   cross: { light: crossLight, dark: crossDark },
   dropDown: { light: dropDownLight, dark: dropDownDark },
   email: { light: emailLight, dark: emailDark },
   eye: { light: eyeLight, dark: eyeDark },
   notFound: { light: notFoundLight, dark: notFoundDark },
   write: { light: writeLight, dark: writeDark },
} as const;

export type IconName = keyof typeof ICONS;
