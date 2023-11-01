export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export interface TokenData {
  idToken: string;
}
