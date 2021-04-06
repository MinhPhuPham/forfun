using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealPort.Entities
{
    public record Form
    {
        public Guid Token { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public FormSettings Settings { get; set; }
        public FormControl[] Controls { get; set; }
    }
    public record FormSettings
    {
        public FormStyle Style { get; set; }
        public string Css { get; set; }
    }
    public record FormControl
    {
        public string Key { get; set; }
        public string Label { get; set; }
        public FormControlType Type { get; set; }
        public int Order { get; set; }
        public bool Required { get; set; }
        public string[] Validations { get; set; }
        public string Value { get; set; }
        public OptionInfo[] Options { get; set; }

    }
    public record OptionInfo
    {
        public string Name { get; set; }
        public string Value { get; set; }

        public OptionInfo(string value, string name)
        {
            this.Name = name;
            this.Value = value;
        }
    }
    public enum FormStyle
    {
        Stack,
        Inline,
        Floating
    }
    public enum FormControlType
    {
        Text = 1,
        Email = 2,
        Url = 3,
        Code = 4,
        Password = 5,
        Number = 6,
        Date = 7,
        Time = 8,
        Radio = 9,
        Checkbox = 10,
        Select = 11,
        TextArea = 12
    }
}

