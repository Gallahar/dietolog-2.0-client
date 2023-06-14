export const API_URL = `${process.env.APP_URL}/api`

export const getReviewsUrl = (string: string) => `/reviews${string}`
export const getCertificatesUrl = (string: string) => `/certificates${string}`
export const getConsultHelpUrl = (string: string) => `/consult-help${string}`
export const getConsultationsUrl = (string: string) => `/consultations${string}`
export const getOrdersUrl = (string: string) => `/orders${string}`
export const getPackagesUrl = (string: string) => `/packages${string}`
export const getProgramsUrl = (string: string) => `/programs${string}`
export const getRecordsUrl = (string: string) => `/records${string}`
export const getAdminUrl = (string: string) => `/manage${string}`
