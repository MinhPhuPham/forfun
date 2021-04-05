﻿using Microsoft.AspNetCore.Mvc;
using RealPort.Common;
using RealPort.Infrastructure.Models;

namespace RealPort.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContentController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            var actionResp = new ActionResponse();
            var page = new Page() { Title = "Clockwork", Keywords = "CPM" };
            actionResp.Data = page;
            string url = Request.Headers["Referer"].ToString();
            actionResp.Url = url;
            return Json(actionResp);
        }
    }
}
