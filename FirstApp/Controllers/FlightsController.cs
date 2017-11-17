using FirstApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace FirstApp.Controllers
{
    public class FlightsController : ApiController
    {
        public IHttpActionResult GetAllFlights()
        {
            var db = new FlightDb();

            return Ok(db.Flights);
        }

    }
}