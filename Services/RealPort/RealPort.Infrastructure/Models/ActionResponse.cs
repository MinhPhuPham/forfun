using System.Collections.Generic;

namespace RealPort.Infrastructure.Models
{
    public interface IActionResponse
    {
        bool Success { get; set; }
        string Message { get; set; }
    }

    public record ActionResponse<T> where T : class
    {
        public bool Success
        {
            get;
            set;
        }
        public string Code { get; set; }
        public string Url { get; set; }

        public string Message
        {
            get;
            set;
        }
        public List<string> Messages
        {
            get;
            set;
        }
        public ActionResponse()
        {
            Success = true;
            Code = Codes.SUCCESS;
            Messages = new List<string>();
        }
        public record Codes
        {
            public const string SUCCESS = "SUCCESS";
            public const string FAILED = "FAILED";
            public const string NOT_FOUND = "NOT_FOUND";
            public const string NOT_AUTHORIZED = "NOT_AUTHORIZED";
            public const string DATA_IN_USE = "DATA_IN_USE";
            public const string REDIRECT = "REDIRECT";
            public const string PREVENT_ACTION = "PREVENT_ACTION";
            public const string NO_PERMISSION = "NO_PERMISSION";
            public const string EXCEEDED_QUOTA = "EXCEEDED_QUOTA";
            public const string PROCESSING = "PROCESSING";
            public const string WARNING = "WARNING";
        }

        public T Data { get; set; }
        public void MarkServerError(string code, string message)
        {
            Success = false;
            Code = code;
            if (!string.IsNullOrWhiteSpace(message))
            {
                this.Message = message;
                this.Messages.Add(message);
            }
            else
            {
                this.Message = DEFAULT_ERROR;
                this.Messages.Add(DEFAULT_ERROR);
            }
        }
        public void MarkServerError(string message)
        {
            MarkServerError(Codes.FAILED, message);
        }
        private const string DEFAULT_ERROR = "Oops! Somethings is wrong (very rarely). Please try again later!";
        public void MarkServerError()
        {
            Success = false;
            Code = Codes.FAILED;
            this.Message = DEFAULT_ERROR;
            this.Messages.Add(DEFAULT_ERROR);
        }
    }
    public record ActionResponse : ActionResponse<object>
    {

    }

    public record ActionPagingResponse<T> : ActionResponse where T : class
    {
        public int? PageIndex { get; set; }
        public int? Total { get; set; }
        public int? PageSize { get; set; }
        public new List<T> Data { get; set; }
        public ActionPagingResponse(List<T> data, int? pageIndex, int? pageSize, int? total)
        {
            this.Data = data;
            this.PageIndex = pageIndex;
            this.PageSize = pageSize;
            this.Total = total;
        }
    }
}
