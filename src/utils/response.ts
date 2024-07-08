export const successResponse = (data: any, message: string,code = 200) => ({
  success: true,
  code,
  data,
  message,
});

export const errorResponse = (data: any, message: string,code = 500) => ({
  success: false,
  code,
  data,
  message,
});
