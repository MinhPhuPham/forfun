using System;
using System.Collections.Generic;
using System.Text;

namespace RealPort.Common
{
    public record Page
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Keywords { get; set; }
        public string Image { get; set; }
        public string OgTitle { get; set; }
        public string OgUrl { get; set; }
        public string OrDescription { get; set; }
        public string OgImage { get; set; }
        public string OgSiteName { get; set; }
        public string TwitterTitle { get; set; }
        public string TwitterCard { get; set; }
        public string TwitterCreator { get; set; }
        public string TwitterImage { get; set; }
        public string TwitterDescription { get; set; }
        public Page()
        {
            Description = "Chino Hills property management at its best. Let Clockwork Property Management, Inc., experienced Chino Hills property managers care for your Chino Hills rental home. If you are looking for a Chino Hills home for rent search our available rentals quickly and easily.";
        }
    }
}
