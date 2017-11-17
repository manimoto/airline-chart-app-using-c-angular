namespace FirstApp.Migrations
{
    using Model;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FirstApp.Model.FlightDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(FirstApp.Model.FlightDb context)
        {
            if (!context.Flights.Any())
            {
                context.Flights.AddRange(
                    new List<Flight>() {
                    new Flight() {Airline = "Delta", Approved = false, Cities = new[] { "ORD", "SFO" }, StartTime = DateTime.Now,EndTime = DateTime.Now, TotalDuration = 20, Date = DateTime.Now,Price = 300 },
                    new Flight() { Airline = "JetBlue", Approved = false, Cities = new[] { "ORD", "SFO" }, StartTime = DateTime.Now,EndTime = DateTime.Now, TotalDuration = 50,Date = DateTime.Now, Price = 400 }
                }

                    );
            }


        }
    }
}
