import { baseApi as api } from "./baseApi";
export const addTagTypes = ["auth"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authCreate: build.mutation<AuthCreateApiResponse, AuthCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/`,
          method: "POST",
          body: queryArg.customTokenObtainPairRequest
        }),
        invalidatesTags: ["auth"]
      }),
      authRefreshCreate: build.mutation<AuthRefreshCreateApiResponse, AuthRefreshCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/refresh/`,
          method: "POST",
          body: queryArg.tokenRefreshRequest
        }),
        invalidatesTags: ["auth"]
      }),
      authRegisterCreate: build.mutation<AuthRegisterCreateApiResponse, AuthRegisterCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/register/`,
          method: "POST",
          body: queryArg.signUpRequest
        }),
        invalidatesTags: ["auth"]
      }),
      authVerifyCreate: build.mutation<AuthVerifyCreateApiResponse, AuthVerifyCreateApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/verify/`,
          method: "POST",
          body: queryArg.tokenVerifyRequest
        }),
        invalidatesTags: ["auth"]
      })
    }),
    overrideExisting: false
  });
export { injectedRtkApi as backendApi };
export type AuthCreateApiResponse = /** status 200  */ JwtAuthResponse;
export type AuthCreateApiArg = {
  customTokenObtainPairRequest: CustomTokenObtainPairRequest;
};
export type AuthRefreshCreateApiResponse = /** status 200  */ TokenRefresh;
export type AuthRefreshCreateApiArg = {
  tokenRefreshRequest: TokenRefreshRequest;
};
export type AuthRegisterCreateApiResponse = /** status 201  */ SignUp;
export type AuthRegisterCreateApiArg = {
  signUpRequest: SignUpRequest;
};
export type AuthVerifyCreateApiResponse = unknown;
export type AuthVerifyCreateApiArg = {
  tokenVerifyRequest: TokenVerifyRequest;
};

export type LocationsRetrieveApiResponse = /** status 200  */ Location;
export type LocationsRetrieveApiArg = {
  /** A unique integer value identifying this location. */
  id: number;
};
export type JwtAuthResponse = {
  access: string;
  refresh: string;
};
export type CustomTokenObtainPairRequest = {
  email: string;
  password: string;
};
export type TokenRefresh = {
  access: string;
};
export type TokenRefreshRequest = {
  refresh: string;
};
export type SignUp = {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
};
export type SignUpRequest = {
  email: string;
  first_name?: string;
  last_name?: string;
  password: string;
};
export type TokenVerifyRequest = {
  token: string;
};

export const {
  useAuthCreateMutation,
  useAuthRefreshCreateMutation,
  useAuthRegisterCreateMutation,
  useAuthVerifyCreateMutation
} = injectedRtkApi;
