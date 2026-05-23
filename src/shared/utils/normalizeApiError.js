export class AppError extends Error {
  constructor({
    message,
    code = "UNKNOWN_ERROR",
    status = null,
    retryable = false,
    details = null,
    original = null,
  }) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;
    this.retryable = retryable;
    this.details = details;
    this.original = original;
  }
}

const isAxiosError = (error) => Boolean(error?.isAxiosError);

export const normalizeApiError = (error) => {
  if (error instanceof AppError) {
    return error;
  }

  if (!isAxiosError(error)) {
    return new AppError({
      message: error?.message || "An unexpected error occurred.",
      original: error,
    });
  }

  const { response, request, code, message } = error;

  if (code === "ERR_CANCELED") {
    return new AppError({
      message: "The request was cancelled.",
      code: "REQUEST_CANCELED",
      retryable: true,
      original: error,
    });
  }

  if (!response && request) {
    return new AppError({
      message: "Network error. Please check your connection and try again.",
      code: "NETWORK_ERROR",
      retryable: true,
      original: error,
    });
  }

  const status = response?.status ?? null;
  const details = response?.data ?? null;

  if (status >= 500) {
    return new AppError({
      message: "Server error. Please try again in a moment.",
      code: "SERVER_ERROR",
      status,
      retryable: true,
      details,
      original: error,
    });
  }

  if (status >= 400) {
    const detailMessage =
      response?.data?.detail || response?.data?.message || message;
    return new AppError({
      message: detailMessage || "Request failed. Please review your input.",
      code: "REQUEST_ERROR",
      status,
      retryable: status === 408 || status === 429,
      details,
      original: error,
    });
  }

  return new AppError({
    message: message || "Request failed unexpectedly.",
    original: error,
  });
};
