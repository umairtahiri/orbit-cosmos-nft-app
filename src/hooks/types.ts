export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

export type APIHookProps = {
  onSuccess?: (data: any) => void;
  onError?: (error?: ErrorResponse) => void;
};
