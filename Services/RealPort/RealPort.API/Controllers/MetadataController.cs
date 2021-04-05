using Microsoft.AspNetCore.Mvc;
using RealPort.Common;
using RealPort.Infrastructure.Models;

namespace RealPort.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MetadataController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            var actionResp = new ActionResponse();
            var page = new Page() { Title = "Clockwork", Keywords = "CPM" };
            actionResp.Data = page;
            string url = Request.Headers["Referer"].ToString();
            actionResp.Url = url;
            return Json(actionResp);
        }
    }
}
