using Microsoft.AspNetCore.Mvc;
using RealPort.Common;
using RealPort.Entities;
using RealPort.Infrastructure.Models;

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
                Title = "Submit your infomation",
                Subtitle = "Submit this form or call us at (909) 548-0044",
                Settings = new FormSettings()
                {
                    Style = FormStyle.Stack
                },
                Controls = new FormControl[]
                {
                    new FormControl()
                    {
                        Key="color",
                        Label = "Color",
                        Type= FormControlType.Select,
                        Options = new OptionInfo[]
                        {
                            new OptionInfo("Black","black"),
                            new OptionInfo("White","white"),
                            new OptionInfo("Red","red"),
                            new OptionInfo("Blue","blue"),
                        }
                    },
                    new FormControl()
                    {
                        Key = "name",
                        Label = "Name",
                        Type= FormControlType.Text,
                        Required= true
                    },
                    new FormControl()
                    {
                        Key="email",
                        Label = "Email",
                        Type=FormControlType.Email
                    },
                     new FormControl()
                    {
                        Key="gender",
                        Label = "Gender",
                        Options = new OptionInfo[]
                        {
                            new OptionInfo("male","Male"),
                            new OptionInfo("female","Female"),
                        },
                        Type=FormControlType.Radio
                    },
                      new FormControl()
                    {
                        Key="denloft",
                        Label = "Den / Loft",
                        Options = new OptionInfo[]
                        {
                            new OptionInfo("den","Den"),
                            new OptionInfo("loft","Loft"),
                        },
                        Type=FormControlType.Radio
                    },
                      new FormControl()
                    {
                        Key="dateOfWeek",
                        Label = "Date of Week",
                        Options = new OptionInfo[]
                        {
                            new OptionInfo("2","MON"),
                            new OptionInfo("3","TUE"),
                            new OptionInfo("4","WED"),
                            new OptionInfo("5","THU"),
                            new OptionInfo("6","FRI"),
                            new OptionInfo("7","SAT"),
                            new OptionInfo("8","SUN"),
                        },
                        Type=FormControlType.Checkbox
                    },
                       new FormControl()
                    {
                        Key="date",
                        Label = "DoB",
                        Type=FormControlType.Date
                    },
                       new FormControl()
                    {
                        Key="time",
                        Label = "Time",
                        Type=FormControlType.Time
                    },
                       new FormControl()
                    {
                        Key="bio",
                        Label = "Bio",
                        Type=FormControlType.TextArea
                    }
                }
            };
            actionResp.Data = form;
            string url = Request.Headers["Referer"].ToString();
            actionResp.Url = url;
            return Json(actionResp);
        }
    }
}
