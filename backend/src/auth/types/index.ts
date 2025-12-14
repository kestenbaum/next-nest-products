export interface JwtPayload {
  email: string;
  sub: number | string;
  role: string;
  iat?: number;
  exp?: number;
}
