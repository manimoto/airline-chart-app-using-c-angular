using FirstApp.AppStart;
using System;
using System.Web.Http;
using System.Web.Routing;

namespace FirstApp
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

      
    }
}