using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RealPort.Common;
using RealPort.Entities;
using RealPort.Infrastructure.Models;
using System;
using System.Text.Json;

namespace RealPort.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            var actionResp = new ActionResponse();
            var form = new Form()
            {
                Token = System.Guid.NewGuid(),
                Title = "Get a FREE Quote",
                Subtitle = "Submit this form or call us at<br> <a href=\"tel:+1-909-548-0044\" style=\"color:#f09718\" >(909) 548-0044</a> ",
                Settings = new FormSettings()
                {
                    Style = FormStyle.Stack
                },
                Controls = new FormControl[]
                {
                      new FormControl()
                    {
                        Key = "firstName",
                        Label = "First Name",
                        Type= FormControlType.Text,
                        Required= true
                    },
                        new FormControl()
                    {
                        Key = "lastName",
                        Label = "Last Name",
                        Type= FormControlType.Text,
                        Required= true
                    },
                    new FormControl()
                    {
                        Key="email",
                        Label = "Email Address",
                        Type=FormControlType.Email
                    },
                    new FormControl()
                    {
                        Key="contactType",
                        Label = "I am a...",
                        Type= FormControlType.Select,
                        Options = new OptionInfo[]
                        {
                            new OptionInfo("propertyOwner","Property Owner"),
                            new OptionInfo("tenant","Tenant"),
                        }
                    },
                     new FormControl()
                    {
                        Key="message",
                        Label = "Message",
                        Type=FormControlType.TextArea
                    }

                     //new FormControl()
                    //{
                    //    Key="gender",
                    //    Label = "Gender",
                    //    Options = new OptionInfo[]
                    //    {
                    //        new OptionInfo("male","Male"),
                    //        new OptionInfo("female","Female"),
                    //    },
                    //    Type=FormControlType.Radio
                    //},
                    //  new FormControl()
                    //{
                    //    Key="denloft",
                    //    Label = "Den / Loft",
                    //    Options = new OptionInfo[]
                    //    {
                    //        new OptionInfo("den","Den"),
                    //        new OptionInfo("loft","Loft"),
                    //    },
                    //    Type=FormControlType.Radio
                    //},
                    //  new FormControl()
                    //{
                    //    Key="dateOfWeek",
                    //    Label = "Date of Week",
                    //    Options = new OptionInfo[]
                    //    {
                    //        new OptionInfo("2","MON"),
                    //        new OptionInfo("3","TUE"),
                    //        new OptionInfo("4","WED"),
                    //        new OptionInfo("5","THU"),
                    //        new OptionInfo("6","FRI"),
                    //        new OptionInfo("7","SAT"),
                    //        new OptionInfo("8","SUN"),
                    //    },
                    //    Type=FormControlType.Checkbox
                    //},
                    //   new FormControl()
                    //{
                    //    Key="date",
                    //    Label = "DoB",
                    //    Type=FormControlType.Date
                    //},
                    //   new FormControl()
                    //{
                    //    Key="time",
                    //    Label = "Time",
                    //    Type=FormControlType.Time
                    //},
                      
                }
            };
            actionResp.Data = form;
            string url = Request.Headers["Referer"].ToString();
            actionResp.Url = url;
            return Json(actionResp);
        }
        [HttpPost]
        public IActionResult Index([FromBody] JsonElement postData)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            var resp = new ActionResponse();
            resp.Success = true;
            resp.Data = postData;
            return Json(resp);
        }
    }
}
