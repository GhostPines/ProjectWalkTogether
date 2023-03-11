export const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])|(?=.*[0-9]).{5,15}$/;
export const nicknameRegex = /^[a-zA-Zㄱ-ㅎ가-힣0-9]{1,20}$/;
