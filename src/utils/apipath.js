export const API_PATH = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/user-profile",
    UPDATE_PROFILE: "/api/auth/update",
    VERIFY_EMAIL: "/api/auth/verify-email",
    RESEND_OTP: "/api/auth/resend-otp",
    DELETE_USER: "/api/auth/delete",
    GET_ALL_USERS: "/api/auth/users"
  },
  BUSINESS: {
    CREATE: "/api/business/create",
    GET_ALL: "/api/business/all",
    GET: "/api/business/get",
    UPDATE: "/api/business/get",
    DELETE: "/api/business/get"
  },
  CALLS: {
    OUTBOUND: "/api/call",
    GET_LOGS: "/api/call/logs"
  },
  RECEPTIONIST: {
    CREATE: "/api/receptionist",
    GET_ALL: "/api/receptionist",
    GET_BY_ID: "/api/receptionist",
    UPDATE: "/api/receptionist",
    DELETE: "/api/receptionist"
  },
  NUMBER: {
    GENERATE: "/api/number/generate",
    GET_ALL: "/api/number/all",
    ASSIGN: "/api/number/assign",
    GET_ASSIGNED: "/api/number/assigned"
  },
  CAMPAIGN: {
    CREATE: "/api/campaign/create",
    GET_ALL: "/api/campaign/all",
    GET_BY_ID: "/api/campaign",
    UPDATE: "/api/campaign",
    DELETE: "/api/campaign"
  },
  INBOUND: {
    GET_ALL: "/inbound/all",
    GET_STATUS: "/inbound/status"
  },
  NOTIFICATION: {
    GET: "/api/notification",
    ADD_EMAIL: "/api/notification/addEmail",
    UPDATE_EMAIL: "/api/notification/email",
    DELETE_EMAIL: "/api/notification/email",
    TOGGLE_EMAIL: "/api/notification/email-toggle",
    TOGGLE_SMS: "/api/notification/sms-toggle",
    ADD_PHONE: "/api/notification/addphone",
    UPDATE_PHONE: "/api/notification/phone",
    DELETE_PHONE: "/api/notification/phone"
  },
  COMPLAINT: {
    CREATE: "/api/complaint/create",
    GET_ALL: "/api/complaint/all",
    UPDATE: "/api/complaint/update",
    DELETE: "/api/complaint/delete"
  },
  SUBSCRIPTION: {
    GET_PLANS: "/api/subscription/plans",
    GET_CURRENT: "/api/subscription/current",
    CREATE_CHECKOUT: "/api/subscription/create-checkout",
    WEBHOOK: "/api/subscription/webhook"
  }
};
